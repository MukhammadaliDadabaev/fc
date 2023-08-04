import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w", {
  polling: true,
});

// bot.getMe().then((m) => {
//   console.log(m)
// })

// bot.on("message", (updated) => {
//   console.log(updated)
// })

bot.on("message", (updated) => {
  bot.sendMessage(updated.chat.id, "ASSALAMU ALAYKUM");
});
