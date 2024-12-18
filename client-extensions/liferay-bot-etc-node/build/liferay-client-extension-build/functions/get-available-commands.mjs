import { lookupConfig } from "@rotty3000/config-node";
import tokenizedFetch from "../util/tokenized-fetch.mjs";
import handleError from "../util/handle-error.mjs";

const LXC_DXP_URL = `${lookupConfig(
  "com.liferay.lxc.dxp.server.protocol"
)}://${lookupConfig("com.liferay.lxc.dxp.mainDomain")}`;

const GET_COMMAND_API = "/o/c/botcommands";

export default async function getBotCommand(botId) {
  const commandUrl = `${LXC_DXP_URL}${GET_COMMAND_API}?filter=r_botCommands_c_botId eq '${botId}' and r_previousCommand_c_botCommandId eq '0'`;

  const commandReq = await tokenizedFetch(commandUrl, "GET").catch((err) =>
    handleError("getBotCommand.commandReq", err)
  );

  const commands = await commandReq
    .json()
    .catch((err) => handleError("commandReq.json()"));

  return commands.items ?? [];
}
