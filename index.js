const {
  rejects
} = require("assert");
const https = require("https");
const {
  resolve
} = require("path");

function getUpdates() {
  https.get('https://api.telegram.org/bot6377274441:AAHoE6irgDgvd3jxqqYZxCACEtsFGDa6I1w/getUpdates', (response) => {
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
}
getUpdates()

// Promise
let m = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve(1982)
  }, 3000)
})

async function main() {
  let a = await m;
  console.log(a);
}

main()