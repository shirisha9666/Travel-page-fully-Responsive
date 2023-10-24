import React, { useState } from "react";
import "./navbar.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const CloseMobilMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <div className="nav_container">
                    <Link to="/" className="fa-icon">
                        <p>ABX</p>
                        <i className="fa-brands fa-typo3"></i>
                    </Link>
                    <div className="menu_icon" onClick={handleClick}>
                        <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"} />
                    </div>
                    <ul className={click ? "nav_menu open" : "nav_menu"} >
                        <li>
                            <NavLink className="nav_links" onClick={CloseMobilMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="nav_links" onClick={CloseMobilMenu}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav_links" onClick={CloseMobilMenu}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav_links_mobile">
                                Sing Up

                            </NavLink>

                        </li>
                    </ul>
                </div>

            </nav >
        </>
    )
}

export default Navbar