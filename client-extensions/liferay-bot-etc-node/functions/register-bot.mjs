import TelegramBot from "node-telegram-bot-api";
import registerChat from "./register-chat.mjs";
import getCommandAndNextCommands from "./get-command-and-next-commands.mjs";
import fixNewLines from "../util/fix-new-lines.mjs";
import getCommand from "./get-command.mjs";
import getAvailableCommands from "./get-available-commands.mjs";

export default async function registerBot(botInfo) {
  const bot = new TelegramBot(botInfo.token, { polling: true });

  const commands = await getAvailableCommands(botInfo.id);

  await bot.setMyCommands(
    commands.map((c) => ({
      command: c.command,
      description: c.description ? c.description : "No description available.",
    }))
  );

  const test = await bot.getMyCommands();

  bot.onText(/\/\w+/, async (msg) => {
    const chatId = msg.chat.id;
    const command = msg.text;

    const x = await registerChat(botInfo.id, chatId);
    await processCommand(command, chatId);
  });

  async function processCommand(commandText, chatId, query = null) {
    const command = await getCommandAndNextCommands(botInfo.id, commandText);

    if (!command) {
      await bot.sendMessage(chatId, "Invalid command.");
      return;
    }

    let message = fixNewLines(`\*${command.response}*`);

    switch (command.responseType) {
      case "listOfCommands":
        message = fixNewLines(`\*${command.response}*`);
        
        command.nextCommands.forEach(c => {
          message+= `\n\n${c.command}: ${c.description}`
        });

        await bot.sendMessage(chatId, message, {parse_mode: "Markdown"});
        break;
      case "text":
        message = fixNewLines(`\*${command.response}*`);
        
        command.nextCommands.forEach(c => {
          message+= `\n\n${c.command}: ${c.description}`
        });

        const x = await bot.sendMessage(chatId, message, {parse_mode: "Markdown"});
        break;
    }
  }
}
