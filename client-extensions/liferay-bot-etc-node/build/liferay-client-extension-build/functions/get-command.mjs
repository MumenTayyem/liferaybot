import { lookupConfig } from "@rotty3000/config-node";
import tokenizedFetch from "../util/tokenized-fetch.mjs";
import handleError from "../util/handle-error.mjs";

const LXC_DXP_URL = `${lookupConfig(
  "com.liferay.lxc.dxp.server.protocol"
)}://${lookupConfig("com.liferay.lxc.dxp.mainDomain")}`;

const GET_COMMAND_API = "/o/c/botcommands";

export default async function getBotCommand(botId, command) {
  const commandUrl = `${LXC_DXP_URL}${GET_COMMAND_API}?filter=r_botCommands_c_botId eq '${botId}' and command eq '${command}'`;

  const commandReq = await tokenizedFetch(commandUrl, "GET").catch((err) =>
    handleError("getBotCommand.commandReq", err)
  );

  const commands = await commandReq
    .json()
    .catch((err) => handleError("commandReq.json()"));

  if (commands.totalCount > 0) {
    return commands.items[0];
  } else {
    return null;
  }
}
