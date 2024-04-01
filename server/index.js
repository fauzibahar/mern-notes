import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/Database.js";
import NoteRoute from "./routes/NoteRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(NoteRoute);

app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.get("/", (req, res) => {
  res.json("Hai");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
