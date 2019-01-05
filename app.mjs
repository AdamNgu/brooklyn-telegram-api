import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import telegramRoutes from "./routes/telegrams.mjs";

dotenv.config({ path: "variables.env" });

// initialize our express app
const app = express();
mongoose.set("debug", true);
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/telegram", telegramRoutes);

app.listen(3000, () => {
  console.log("Server is up and running on port number 3000");
});
