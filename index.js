import axios, {
  formToJSON
} from "axios";

async function TelegramBot() {
  let updates = await axios.get('https://api.telegram.org/bot6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w/getUpdates')

  for (let message of updates.data.result) {
    sendRequest("sendMessage", {
      chat_id: message.message.chat.id,
      // text: "<b>ASSALAMU ALAYKUM</b>",
      text: "*bold \*ASSALAMU ALAYKUM*",
      disable_notification: true,
      reply_to_message_id: message.message.message_id,
      parse_mode: "html"
    })
  }

}

TelegramBot()

async function sendRequest(methodName, options) {
  let response = await axios.post("https://api.telegram.org/bot6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w/" + methodName, options)

  return response.data;
}