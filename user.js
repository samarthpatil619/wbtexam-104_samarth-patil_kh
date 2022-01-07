const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "exam",
};

async function createMessage(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into wbt values (?,?,?,?)`;
  await connection.query(sql, [
    user.firstname,
    user.lastname,
    user.mobile_no,
    user.message,
  ]);
  console.log("message Added");
  await connection.endAsync();
}

async function readMessage() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from wbt`;
  let list = await connection.queryAsync(sql, []);
  console.log(list);
  await connection.endAsync();
  return list;
}

module.exports = { createMessage, readMessage };
// readMessage();
// let user = {
//   firstname: "John",
//   lastname: "Doe",
//   mobile_no: "8745210365",
//   message: "I am fine",
// };
// createMessage(user);
