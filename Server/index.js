const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "1234567890";

let password = "";
app.use(express.json());
app.use(cors());

app.post("/", (request, response) => {
  let pool = "";
  let lowerIsChecked = request.body.lowerIsChecked;
  let upperIsChecked = request.body.upperIsChecked;
  let numberIsChecked = request.body.numberIsChecked;

  const payload = request.body;
  password = "";
  if (
    lowerIsChecked === true &&
    upperIsChecked === true &&
    numberIsChecked === true
  ) {
    pool = lower + upper + number;
  } else if (lowerIsChecked === true && upperIsChecked === true) {
    pool = lower + upper;
  } else if (numberIsChecked === true && upperIsChecked === true) {
    pool = number + upper;
  } else if (lowerIsChecked === true && numberIsChecked === true) {
    pool = lower + number;
  } else if (lowerIsChecked === true) {
    pool = lower;
  } else if (upperIsChecked === true) {
    pool = upper;
  } else if (numberIsChecked === true) {
    pool = number;
  } else {
    pool = lower + upper + number;
  }

  for (let i = 0; i < payload.length; i++) {
    b = Math.floor(Math.random() * pool.length);
    password += pool[b];
  }
  return response.send(password);
});

app.listen(PORT, () => {
  console.log("Server is running at :-", PORT);
});
