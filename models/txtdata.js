const { Schema, model } = require("mongoose");

const SchemaF = new Schema({
  userid: String, // 유저 id
  message: String, // 메세지
  time: String, // 보낸 시간
})

module.exports = model("message", SchemaF);