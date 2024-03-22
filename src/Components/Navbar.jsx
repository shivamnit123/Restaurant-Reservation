import React, { useState } from "react";
import data from "../data.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <nav>
                <div className="krishna">
                    <div>
                        <img src="./krishn.png" alt="" height={40} width={40} />
                    </div>
                    <div className="logo">KRISHNA RESTAURANT</div>
                </div>
                <div className={show ? "navLinks showmenu" : "navLinks"}>
                    <div className="links">
                        {data.headingdata.map((element) => (
                            <Link
                                to={element.link}

                                duration={500}
                                key={element.id}
                            >
                                {element.title}
                            </Link>
                        ))}
                    </div>
                    <button className="menuBtn">OUR MENU</button>
                </div>
                <div className="hamburger" onClick={() => setShow(!show)}>
                    <GiHamburgerMenu />
                </div>
            </nav>
        </>
    );
};

export default Navbar;