import express from "express";
import cors from "cors";
import morgan from "morgan";

import { env } from "./config/env.js";

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PahadiStay AI Backend Running",
  });
});

export default app;