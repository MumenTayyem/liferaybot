import { lookupConfig } from "@rotty3000/config-node";
import getToken from "../../util/get-token.mjs";
import handleError from "../../util/handle-error.mjs";

const LXC_DXP_URL = `${lookupConfig(
  "com.liferay.lxc.dxp.server.protocol"
)}://${lookupConfig("com.liferay.lxc.dxp.mainDomain")}`;

const GET_BOTS_API = "/o/c/bots";

export default async function initializeBots() {
  const token = await getToken();
  const url = LXC_DXP_URL + GET_BOTS_API;

  //console.log(token);

  const botsRequest = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  }).catch(err => handleError("botsRequest.fetch",err));

  if (!botsRequest.ok) {
    handleError("botsRequest.ok",botsRequest.statusText);
  }

  const bots = (
    await botsRequest.json().catch((err) => handleError("botsRequest.json()",err))
  ).items.map((i) => ({
    id: i.id,
    name: i.botName,
    token: i.botToken,
  }));


  bots.forEach(bot => registerBot)

}
