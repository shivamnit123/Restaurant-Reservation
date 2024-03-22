import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="banner">
                    <div className="krishna">
                        <div className="logo">JAI SHREE KRISHNA<span><img src="./krishn.png" alt="" height={65} width={65} /></span></div>

                    </div>
                    <div className="right">
                        <p>MR-9 VIJAYNAGAR, INDORE</p>
                        <p>Open: 11:00 PM - 11:00 PM</p>
                    </div>
                </div>
                <div className="banner">
                    <div className="left">
                        <p>Developed By SHIVAM TIWARI</p>
                    </div>
                    <div className="right">
                        <p>All Rights Reserved By Shivam.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;