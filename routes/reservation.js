import express from "express";
import send_reservation from "../controller/sendReservation.js";
const router = express.Router();
import { errorMiddleware } from '../error/error.js';
router.post("/send", send_reservation, errorMiddleware);

export default router;