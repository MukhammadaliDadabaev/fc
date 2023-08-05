import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w", {
  polling: true,
});

bot.on("message", (updated) => {
  bot.sendMessage(updated.chat.id, "ASSALAMU ALAYKUM", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Uni bos",
            callback_data: "Meni bos",
          },
        ], // BU BIRINCHI-QATOR
      ],
    },
  });
});

// 1- remove_keyboard: true,  => OLIB-TASHLAYDI
// 2- one_time_keyboard: true => BIRMARTA ISHLAYDI
// 3- resize_keyboard: true   => IHCHAM QILADI TELEFONGA-MOSLAYDI
