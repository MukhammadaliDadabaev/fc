import axios from "axios";

async function TelegramBot() {
  let updates = await axios.get('https://api.telegram.org/bot6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w/getUpdates')

  // if (!updates ? data ? ok) return;

  updates.data.result.forEach(element => {
    console.log(element);
  });
}

TelegramBot()