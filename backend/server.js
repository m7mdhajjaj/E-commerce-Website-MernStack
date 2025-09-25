import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/monogoDB.js";

// app config
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
//middleware
app.use(express.json()); // بدونو السيرفر ما بفهم الjson
app.use(cors()); // بفتح الاتصال بين الفرونت والباك على دومين مختلف

// api endpoint
app.get("/", (req, res) => {
  res.status(200).send("Hello from backend");
});

// listener
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

