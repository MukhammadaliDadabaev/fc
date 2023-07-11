const fs = require("fs")
// console.log(fs);

fs.mkdir("./test", {}, (error) => {
  console.log(error);
  if (!error) {
    console.log("Papka yaratildi..");
  }
})