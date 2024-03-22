import ErrorHandler from '../error/error.js';
import { Reservation } from '../models/reservationschema.js';

const send_reservation = async (req, res, next) => {
    const { firstName, lastName, email, date, time, phone, totalMembers, category } = req.body;
    if (!firstName || !lastName || !email || !date || !time || !phone || !totalMembers || !category) {
        return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
    }

    try {
        await Reservation.create({
            firstName,
            lastName,
            email,
            date,
            time,
            phone,
            totalMembers,
            category,
        });
        res.status(201).json({
            success: true,
            message: "Reservation Sent Successfully!",
        });
    } catch (error) {
        // Handle Mongoose validation errors
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            console.log(validationErrors[0]);
            return next(new ErrorHandler(validationErrors[0], 400));
        }
        next(error); // Pass other errors to the global error handler
    }
};

export default send_reservation;
