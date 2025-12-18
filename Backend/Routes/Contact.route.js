import express from "express";
import { SendContact } from "../Controllers/Contact.controller.js";

const router = express.Router();

router.post("/",SendContact)


export default router;
