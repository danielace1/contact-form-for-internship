import express from "express";
import cors from "cors";
import router from "./route/contact.route.js";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
