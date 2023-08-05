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
            text: "Uni-1 bos",
            callback_data: "Meni bos",
          },
          {
            text: "Link-1 bos",
            url: "https://github.com",
          },
        ], // BU BIRINCHI-QATOR
        [
          {
            text: "Uni-2 bos",
            callback_data: "Meni bos",
          },
          {
            text: "Link-2 bos",
            url: "https://github.com",
          },
        ], // BU IKKINCHI-QATOR
      ],
    },
  });
});

// 1- remove_keyboard: true,  => OLIB-TASHLAYDI
// 2- one_time_keyboard: true => BIRMARTA ISHLAYDI
// 3- resize_keyboard: true   => IHCHAM QILADI TELEFONGA-MOSLAYDI
