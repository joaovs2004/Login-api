import { Sequelize } from "sequelize";

const db = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite"
});

db.sync();

export { db };  