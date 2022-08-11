import React from 'react'
import { NavLink } from "react-router-dom";
import '../../style/Sidebar.css';

const Sidebar = () => {
    return (
        <>
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header text-center">
                        <NavLink to="/"><h3>Expensee</h3></NavLink>
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/know-more">Know More</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar