import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservation.js';

// Load environment variables from .env file
dotenv.config();
console.log(process.env.FRONTEND_URL)
// Create an Express app
const app = express();

// Configure CORS middleware to allow requests from specified origin with credentials
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,
    })
);

// Parse incoming JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount reservationRouter for handling reservation-related routes
app.use('/api/v1/reservation', reservationRouter);

app.get("/", (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: "HELLO WORLD AGAIN"
    })
})

// Establish database connection using the MongoDB URI from environment variables
dbConnection();

// Error handling middleware to catch and process errors
app.use(errorMiddleware);

export default app;
