import express from "express";

export const botRemovedRouter = express.Router();

botRemovedRouter.get('/bot_removed', async (req, res) => {
    try {
        // await registerBot(req.body.objectEntry.values);
        res.sendStatus(200);
      } catch (ex) {
        console.error("Failed to register bot");
        res.send(500);
      }
});
