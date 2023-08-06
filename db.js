import fsPromises from "fs/promises";
import fs from "fs";

class Database {
  constructor(db_name) {
    this.db_name = db_name;
    this.init();
  }

  //-------> BU FIYL-YARATADI FUNC
  async init() {
    let exist = fs.existsSync("./" + this.db_name + ".json");
    if (!exist) {
      await fsPromises.writeFile(
        "./" + this.db_name + ".json",
        JSON.stringify({}),
        {
          encoding: "utf-8",
        }
      );
    }
  }
  //-------> BU FIYLNI-O'QIYDI FUNC
  async getAllData() {
    let data = await fsPromises.readFile("./" + this.db_name + ".json", {
      encoding: "utf-8",
    });
    return JSON.parse(data);
  }

  //-------> BU FIYL-QO'SHADI FUNC
  async addData(collection, obj) {
    let data = await this.getAllData();

    // Bu ma'lumotni bor-yo'qligini tekshiradi
    if (data[collection]) {
      data[collection].push[obj];
    } else {
      data[collection] = [obj];
    }

    // Bu ma'lumotni faylga qo'shadi
    await fsPromises.writeFile(
      "./" + this.db_name + ".json",
      JSON.stringify(data),
      {
        encoding: "utf-8",
      }
    );

    return data[collection];
  }
}

const db = new Database("db_1");
db.getAllData().then(console.log);
db.addData("users", { user_id: 10, name: "Ali", age: 90 }).then(console.log);

//-------> BU OBJCTE-QO'SHISH
// let obj = {
//   users: [1],
// };
// obj["users"] = [1];
