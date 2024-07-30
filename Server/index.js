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
    request.body.lowerIsChecked === "true" &&
    request.body.upperIsChecked === "true"
  ) {
    pool = lower + upper;
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
