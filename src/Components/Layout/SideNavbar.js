import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
const SideNavbar = () => {
    
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link " href="index.html">
                        <BsGridFill className='bi bi-grid'/>
                        <span>Dashboard</span>
                    </a>
                </li>
                {/* End Dashboard Nav */}
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#components-nav"
                        data-bs-toggle="collapse"
                        href="#"
                    >
                        <i className="bi bi-menu-button-wide" />
                        <span>Components</span>

                        <FaChevronDown className="ms-auto" />
                    </a>
                    <ul
                        id="components-nav"
                        className="nav-content collapse"
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="components-alerts.html">
                                <i className="bi bi-circle" />
                                <span>Alerts</span>
                            </a>
                        </li>
                        <li>
                            <a href="components-accordion.html">
                                <i className="bi bi-circle" />
                                <span>Accordion</span>
                            </a>
                        </li>

                    </ul>
                </li>
                {/* End Components Nav */}
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#forms-nav"
                        data-bs-toggle="collapse"
                        href="#"
                    >
                        <i className="bi bi-journal-text" />
                        <span>Forms</span>
                        <FaChevronDown className="ms-auto" />
                    </a>
                    <ul
                        id="forms-nav"
                        className="nav-content collapse"
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="forms-elements.html">
                                <i className="bi bi-circle" />
                                <span>Form Elements</span>
                            </a>
                        </li>

                    </ul>
                </li>
                {/* End Forms Nav */}
                {/* End Icons Nav */}
                <li className="nav-heading">Pages</li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="users-profile.html">
                        <i className="bi bi-person" />
                        <span>Profile</span>
                    </a>
                </li>

                {/* End Blank Page Nav */}
            </ul>
        </aside>
    )
}

export default SideNavbar
