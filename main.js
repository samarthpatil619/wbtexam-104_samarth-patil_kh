const express = require("express");
const app = express();
app.use(express.json());

const { createMessage, readMessage } = require("./user");

app.get("/users", async (req, res) => {
  const list = await readMessage();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const list = req.body;
  await createMessage(list);
  res.json({ message: "Message Added" });
});

app.listen(4000, () => console.log("Server started........"));
