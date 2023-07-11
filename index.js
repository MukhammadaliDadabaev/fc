const https = require("https")

https.get('https://api.telegram.org/bot6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w/getMe', (response) => {
  response.setEncoding('utf-8')

  let data = "";
  response.on('data', (chunk) => {
    data = data + chunk;
  })

  response.on('end', () => {
    try {
      let obj = JSON.parse(data)
      console.log(obj);
    } catch (error) {
      console.log(error.message);
    }
  })
})