import { DataTypes } from "sequelize";
import { db } from "../configs/db.js";

const Users = db.define("Users", {
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export { Users };