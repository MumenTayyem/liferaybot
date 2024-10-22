import { lookupConfig } from "@rotty3000/config-node";
import tokenizedFetch from "../util/tokenized-fetch.mjs";
import handleError from "../util/handle-error.mjs";

const LXC_DXP_URL = `${lookupConfig(
  "com.liferay.lxc.dxp.server.protocol"
)}://${lookupConfig("com.liferay.lxc.dxp.mainDomain")}`;

const GET_COMMAND_API = "/o/c/botcommands";

export default async function getCommandAndNextCommands(botId, commandText) {
  const commandReq = await tokenizedFetch(
    `${LXC_DXP_URL}${GET_COMMAND_API}?filter=command eq '${commandText}'`
  ).catch((err) => handleError("getCommandAndNextCommands.commandReq", err));

  const filteredCommands = await commandReq
    .json()
    .catch((err) => handleError("commandReq.json()", err));

  if (filteredCommands.totalCount === 0) {
    handleError("filteredCommands.totalCount === 0");
    return;
  }

  const command = filteredCommands.items.map((c) => ({
    id: c.id,
    title: c.title,
    command: c.command,
    responseType: c.responseType.key,
    response: c.response,
    description: c.description
  }))[0];

  console.log(command);

  switch (command.responseType) {
    case "text":
    case "listOfCommands":
      const nextCommandsReq = await tokenizedFetch(
        `${LXC_DXP_URL}${GET_COMMAND_API}?filter=r_previousCommand_c_botCommandId eq '${command.id}' and r_botCommands_c_botId eq '${botId}'`
      ).catch((err) =>
        handleError("getCommandAndNextCommands.nextCommandsReq", err)
      );

      const nextCommandsFiltered = await nextCommandsReq
        .json()
        .catch((err) => handleError("nextCommands.json()", err));

      // if (nextCommandsFiltered.totalCount === 0) {
      //   handleError("nextCommands.totalCount === 0");
      //   return;
      // }

      const nextCommands = nextCommandsFiltered.items.map((c) => ({
        id: c.id,
        title: c.title,
        command: c.command,
        responseType: c.responseType.key,
        response: c.response,
        description: c.description
      }));
      command.nextCommands = nextCommands;
      break;
    case "webhook":
      break;
  }

  return command;
}
