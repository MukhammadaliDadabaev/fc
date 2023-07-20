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
    // resolve(1982)
    rejects("Error qaytaradi...")
  }, 3000)
})

//------------> ASYNCHIRON-USULI
// async function main() {
//   try {
//     let a = await m;
//     console.log(a);
//   } catch (error) {
//     console.log(error);
//   }
// }

// main()

//------------> then 
m.then(result => console.log(result))
  .catch(err => console.log(err))