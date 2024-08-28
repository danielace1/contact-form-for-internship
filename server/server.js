import express from "express";
import router from "./route/contact.route.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
