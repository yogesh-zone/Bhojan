const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const User = require("./DBmodels/userModel");

connectDatabase();

if(process.env.NODE_ENV !=="production")
    dotenv.config({path : "backend/config/config.env"})

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is working on http:\\localhost:${process.env.PORT}`);
})