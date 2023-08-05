import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w", {
  polling: true,
});

bot.on("message", (updated) => {
  if (updated.text === "/start") {
    bot.sendMessage(updated.chat.id, "Menyuni tanglang 👇", {
      reply_markup: {
        keyboard: [["Narhlar"], ["Aloqa"]],
        resize_keyboard: true,
      },
    });
  } else if (updated.text === "Aloqa") {
    bot.sendMessage(updated.chat.id, "Biz bilan boglanish +998897101010");
  } else if (updated.text === "Narhlar") {
    bot.sendMessage(updated.chat.id, "Barchasi 8880000 sum");
  } else if (updated.text === "Okey") {
    bot.sendMessage(updated.chat.id, "Rahmat 😎");
  }
});

// 1- remove_keyboard: true,  => OLIB-TASHLAYDI
// 2- one_time_keyboard: true => BIRMARTA ISHLAYDI
// 3- resize_keyboard: true   => IHCHAM QILADI TELEFONGA-MOSLAYDI
