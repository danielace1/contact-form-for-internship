import express from "express";
import { handleContactUs } from "../controller/contact.js";

const router = express.Router();

router.post("/contact-us", handleContactUs);

export default router;
