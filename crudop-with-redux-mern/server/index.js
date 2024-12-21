import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/studentRoutes.js";

dotenv.config();
const app = express();
app.use(cors({
  origin: 'https://crud-op-with-redux.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow cookies if needed
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

const PORT = process.env.PORT || 5000;

const URl = process.env.MONGOURL;

mongoose.connect(URl,{useNewUrlParser: true,
  useUnifiedTopology: true,}).then(() => {
  console.log("MongoDB Connected");

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});

app.use("/api", router);
