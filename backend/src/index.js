import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"

const app = express();

const PORT = process.env.PORT

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("Servre running on PORT:" + PORT)
});