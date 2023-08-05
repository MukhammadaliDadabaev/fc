import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w", {
  polling: true,
});

bot.on("message", (updated) => {
  bot.sendMessage(updated.chat.id, "ASSALAMU ALAYKUM", {
    reply_markup: {
      keyboard: [["TEST-1"], ["TEST-2"], ["TEST-3"]],
    },
  });
});
