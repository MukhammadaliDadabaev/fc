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
      // remove_keyboard: true,
      one_time_keyboard: true,
      keyboard,
      // resize_keyboard: true,
    },
  });
});

// 1- remove_keyboard: true,  => OLIB-TASHLAYDI
// 2- one_time_keyboard: true => BIRMARTA ISHLAYDI
// 3- resize_keyboard: true   => IHCHAM QILADI TELEFONGA-MOSLAYDI
