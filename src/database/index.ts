import mongoose from "mongoose";

var mongoDB = process.env.MONGO_DB_KEY;
mongoose.connect(mongoDB);

var db = mongoose.connection;

db.on("connected", () => console.log("Database connected."));
db.on("error", console.error.bind(console, "Connection error:"));