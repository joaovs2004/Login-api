// Imports
import Express from "express";
import express from "express";
import { router } from "./src/routes/accounts.js";
import cors from "cors";

const app = Express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.use("/", router);

// Port
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});