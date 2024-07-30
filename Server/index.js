const express = require("express");
const app = express();
const PORT = 8080;

let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "1234567890";

let password = "";
app.use(express.json());

app.post("/", (request, response) => {
  let pool = "";

  const payload = request.body;
  password = "";
  if (
    request.body.lowerIsChecked === true &&
    request.body.upperIsChecked === true &&
    request.body.numberIsChecked === true
  ) {
    pool = lower + upper + number;
  } else if (
    request.body.lowerIsChecked === true &&
    request.body.upperIsChecked === true
  ) {
    pool = lower + upper;
  } else if (
    request.body.numberIsChecked === true &&
    request.body.upperIsChecked === true
  ) {
    pool = number + upper;
  } else if (
    request.body.lowerIsChecked === true &&
    request.body.numberIsChecked === true
  ) {
    pool = lower + number;
  } else {
    pool = lower + upper + number;
  }

  for (let i = 0; i < payload.length; i++) {
    b = Math.floor(Math.random() * pool.length);
    password += pool[b];
  }
  return response.send(password);
  // return response.send(pool);
});

app.listen(PORT, () => {
  console.log("Server is running at :-", PORT);
});
