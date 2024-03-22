import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState();
    const [totalMembers, setTotalMembers] = useState(1);
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const HandleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/v1/reservation/send",
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    date,
                    time,
                    totalMembers,
                    category,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone();
            setEmail("");
            setTime("");
            setDate("");
            setTotalMembers(1); // Reset totalMembers state
            setCategory(""); // Reset category state
            navigate("/success");
        } catch (error) {

            toast.error(error.response.data.message);

        }
    };

    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call</p>
                        <form>
                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    placeholder="Date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <input
                                    type="time"
                                    placeholder="Time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="email_tag"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="totalMembers">Total Members:</label>
                                <input
                                    type="number"
                                    id="totalMembers"
                                    value={totalMembers}
                                    onChange={(e) => setTotalMembers(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="category">Category:</label>
                                <select
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Terrace Eateries">Terrace Eateries</option>
                                    <option value="Rooftop Oasis">Rooftop Oasis</option>
                                    <option value="Sky High Dining">Sky High Dining</option>
                                    <option value="Elevated Gardens">Elevated Gardens</option>
                                </select>
                            </div>
                            <button type="submit" onClick={HandleReservation}>
                                BOOK NOW {' '}
                                <span>
                                    <HiOutlineArrowNarrowRight />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;

