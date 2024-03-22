import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be of at least 3 Characters."],
        maxLength: [30, "First name cannot exceed 30 Characters."],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must be of at least 3 Characters."],
        maxLength: [30, "Last name cannot exceed 30 Characters."],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        validate: [
            {
                validator: function (value) {
                    return validator.isMobilePhone(value, "en-IN");
                },
                message: "Please enter a valid phone number.",
            },
            {
                validator: function (value) {
                    return value.length === 10;
                },
                message: "Phone number must contain 10 digits.",
            },
        ],
    },
    totalMembers: {
        type: Number,
        required: true,
        validate: [
            {
                validator: function (value) {
                    return value >= 1;
                },
                message: "At least one member is compulsory.",
            },
            {
                validator: function (value) {
                    return value <= 30;
                },
                message: "Total Members cannot exceed 30.",
            },
        ],
    },
    category: {
        type: String,
        enum: ["Terrace Eateries", "Rooftop Oasis", "Sky High Dining", "Elevated Gardens"],
        required: [true, "Category is required."],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
