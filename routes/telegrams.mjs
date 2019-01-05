import express from "express";
import TelegramModel from "../models/telegram.mjs";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("lol");
});

router.post("/", (req, res) => {
  TelegramModel.create(req.body)
    .then(function(newTelegram) {
      res.status(201).json(newTelegram);
    })
    .catch(function(err) {
      res.send(err);
    });
});

export default router;
