import TelegramBot from "node-telegram-bot-api";
import registerChat from "./register-chat.mjs";
import getCommandAndNextCommands from "./get-command-and-next-commands.mjs";
import fixNewLines from "../util/fix-new-lines.mjs";
import getAvailableCommands from "./get-available-commands.mjs";
import getGeminiAnswer from "./get-gemini-answer.mjs";
import removeSpecialChars from "../util/remove-special-chars.mjs";

export default async function registerBot(botInfo) {
  const bot = new TelegramBot(botInfo.token, { polling: true });

  const commands = await getAvailableCommands(botInfo.id);

  await bot.setMyCommands(
    commands.map((c) => ({
      command: c.command,
      description: c.description ? c.description : "No description available.",
    }))
  );

  bot.onText(/\/\w+/g, async (msg) => {
    const chatId = msg.chat.id;
    const command = msg.text;

    await bot.sendChatAction(chatId, 'typing');

    await processCommand(command, chatId);
    await registerChat(botInfo.id, msg.chat);
  });

  bot.onText(/^(?!\/\w+).+/g, async (msg) => {
    const chatId = msg.chat.id;
    const command = msg.text;

    await bot.sendChatAction(chatId, 'typing');

    const response = removeSpecialChars(await getGeminiAnswer(command));

    await bot.sendMessage(chatId, response, {parse_mode: "Markdown"});
    await registerChat(botInfo.id, msg.chat);
  });

  async function processCommand(commandText, chatId, query = null) {
    const command = await getCommandAndNextCommands(botInfo.id, commandText);

    if (!command) {
      await bot.sendMessage(chatId, "Invalid command.");
      return;
    }

    let message = `🌟*${command.title}*🌟\n\n\n`;
        
    message+= fixNewLines(`\*${command.response}*`);
    command.nextCommands.forEach((c,i) => {
      message+= `${i==0?'':'\n\n'}*${c.command}*: ${c.description}`
    });

    await bot.sendMessage(chatId, message, {parse_mode: "Markdown"});
  }
}
