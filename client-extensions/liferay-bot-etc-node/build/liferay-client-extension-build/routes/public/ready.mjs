import express from "express";
import { lookupConfig } from "@rotty3000/config-node";

export const readyRouter = express.Router();

readyRouter.get(lookupConfig("readyPath"), (req, res) => {
  // res.send("READY!");
  res.send({ groups: ["liveness", "readiness"], status: "UP" });
});
