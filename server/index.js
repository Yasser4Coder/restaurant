import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import foodRouts from "./src/routes/FoodServices.routes.js";
const PORT = 5001;
const DB_URL =
  "mongodb+srv://bybenseghieryasser:tqnYztMrMUG7j2f0@cluster0.xntsfip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/foods", foodRouts);

app.get("/", (req, res) => {
  res.send("working");
});

mongoose
  .connect(DB_URL)
  .then(() => console.log("data base connected"))
  .catch((err) => console.log(err && "the data base connection field"));

app.listen(PORT, () => console.log(`the server is running on port: ${PORT}`));
