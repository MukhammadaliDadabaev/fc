import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w", {
  polling: true,
});

const key_1 = ["TEST-1", "TEST-2", "TEST-3"];
const key_2 = ["TEST-1", "TEST-2", "TEST-3"];
const key_3 = ["TEST-1", "TEST-2", "TEST-3"];
const keyboard = [key_1, key_2, key_3];

bot.on("message", (updated) => {
  bot.sendMessage(updated.chat.id, "ASSALAMU ALAYKUM", {
    reply_markup: {
      keyboard: keyboard,
    },
  });
});
