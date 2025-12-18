import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./ConnectDB/connectDB.js";
import ContactRoute from "./Routes/Contact.route.js";

dotenv.config();

const app = express();


app.use(cors()); 
app.use(bodyParser.json());

connectDB();


app.use("/api/contact", ContactRoute);


app.get("/", (req, res) => {
  res.send("Hello from backend !!!");
});


const PORT = process.env.PORT || 2005;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
