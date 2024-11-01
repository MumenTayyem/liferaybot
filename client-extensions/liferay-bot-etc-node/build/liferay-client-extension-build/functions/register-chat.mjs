import handleError from "../util/handle-error.mjs";
import { logger } from "../util/logger.mjs";
import tokenizedFetch from "../util/tokenized-fetch.mjs";
import { lookupConfig } from "@rotty3000/config-node";

const LXC_DXP_URL = `${lookupConfig(
  "com.liferay.lxc.dxp.server.protocol"
)}://${lookupConfig("com.liferay.lxc.dxp.mainDomain")}`;

const POST_CHAT_API = "/o/c/botchats/";
const GET_CHAT_API = "/o/c/botchats/";

export default async function registerChat(botId, chat) {
  const chatExists = await checkIfChatExists(chat.id);

  if (chatExists) {
    logger.info("Chat already exists; no need to register.");
    return;
  }

  const postUrl = LXC_DXP_URL + POST_CHAT_API;

  const body = JSON.stringify({
    firstName: chat.first_name,
    lastName: chat.last_name,
    chatID: chat.id,
    r_botChats_c_botId: botId,
  });

  await tokenizedFetch(postUrl, "POST", body).catch((err) =>
    handleError("registerChat.post", err)
  );
}

async function checkIfChatExists(chatId) {
  const getUrl = LXC_DXP_URL + GET_CHAT_API + `?filter=chatID eq ${chatId}`;

  const chatReq = await tokenizedFetch(getUrl, "GET", null).catch((err) =>
    handleError("checkIfChatExists.get", err)
  );

  const chats = await chatReq
    .json()
    .catch((err) => handleError("chatReq.json()", err));

  return chats.totalCount === 1 ? true : false;
}
