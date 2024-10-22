import { lookupConfig } from "@rotty3000/config-node";
import handleError from "../util/handle-error.mjs";
import registerBot from "./register-bot.mjs";
import tokenizedFetch from "../util/tokenized-fetch.mjs";

const LXC_DXP_URL = `${lookupConfig(
  "com.liferay.lxc.dxp.server.protocol"
)}://${lookupConfig("com.liferay.lxc.dxp.mainDomain")}`;

const GET_BOTS_API = "/o/c/bots";

export default async function initializeTelegramBots() {
  const url = LXC_DXP_URL + GET_BOTS_API;

  const botsRequest = await tokenizedFetch(url, "GET").catch((err) => handleError("botsRequest.fetch", err));

  if (!botsRequest.ok) {
    handleError("botsRequest.ok", botsRequest.statusText);
  }

  const bots = (
    await botsRequest
      .json()
      .catch((err) => handleError("botsRequest.json()", err))
  ).items.map((i) => ({
    id: i.id,
    name: i.botName,
    token: i.botToken,
  }));

  console.log(bots);

  bots.forEach(botInfo => {
    const bot = registerBot(botInfo);
  });
}
