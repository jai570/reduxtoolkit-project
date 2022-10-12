import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./connection/conn.js";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoutes.js";
import tourRoute from "./routes/tourRoutes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5600;

connectDB();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/user", userRoute);
app.use("/api/tour", tourRoute);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server listning on port ${port}`);
});
