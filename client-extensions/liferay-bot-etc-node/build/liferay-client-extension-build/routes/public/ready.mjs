import express from "express";
import { lookupConfig } from "@rotty3000/config-node";

export const readyRouter = express.Router();

readyRouter.get(lookupConfig("readyPath"), (req, res) => {
  res.sendStatus(200);
});
