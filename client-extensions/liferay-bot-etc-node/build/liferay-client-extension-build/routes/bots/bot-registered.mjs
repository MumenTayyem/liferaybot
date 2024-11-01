import express from "express";
import registerBot from "../../functions/register-bot.mjs";

export const botRegisteredRouter = express.Router();

botRegisteredRouter.post("/bot_registered", async (req, res) => {
  try {
    await registerBot(req.body.objectEntry.values);
    res.sendStatus(200);
  } catch (ex) {
    console.error("Failed to register bot");
    res.send(500);
  }
});
