import Router from "express";
import bcrypt from "bcrypt";
import { Users } from "../models/user.js";

const router = Router();

router.post("/register/", (req, res) => {
    const user = {
        user: req.body.user,
        password: req.body.password
    };

    if(user.user == undefined || user.password == undefined) return res.status(400).send({"error": "Fields not filled"});

    const saltRounds = 10;   
    
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            Users.create({
                user: user.user,
                password: hash
            });
        });
    });
    
    return res.status(200).send({message: "User created sucessfuly"});
});

router.post("/login/", async (req, res) => {
    const user = {
        user: req.body.user,
        password: req.body.password
    };

    if(user.user == undefined || user.password == undefined) return res.status(400).send({"error": "Fields not filled"});

    let users = await Users.findAll({
        where: {
            user: user.user
        }
    });

    if(users.length == 0) return res.status(401).send({mensagem: "User not found"});

    bcrypt.compare(user.password, users[0].getDataValue("password"), (err, result) => {
        if(err) {
            return res.status(401).send({mensagem: "Authentication Failed"})
        }

        if(result) {
            return res.status(200).send({mensagem: "Authentication Sucesfully"})
        }

        return res.status(401).send({mensagem: "Authentication Failed"})
    });
});

export { router };