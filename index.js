const https = require("https")

https.get('https://jsonplaceholder.typicode.com/todos/1', (response) => {
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