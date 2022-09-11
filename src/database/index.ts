import mongoose from "mongoose";

var mongoDB = "mongodb+srv://cmarciao:Reymysterio123@cluster0.cjlv6ba.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB);

var db = mongoose.connection;

db.on("connected", () => console.log("Database connected."));
db.on("error", console.error.bind(console, "Connection error:"));