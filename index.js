const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("MONGO DB가 연결되었습니다."));

mongoose.connection.on("reconnected", () => {
  console.log("MONGO DB가 다시 연결되었습니다.");
});

mongoose.connection.on("disconnected", () => {
  console.log("MONGO DB의 연결이 끊겼습니다.");
});

const message_Schema = require("/memo/models/txtdata.js")

async function saveMessage(username, msg){
  await message_Schema.updateOne(
      {userid: username},
      { message: msg, time: Date.now()},
      {upsert:true}
  );
}

function printName()  {
  const name = document.getElementById('name').value;
  document.getElementById("result").innerText = name;
}