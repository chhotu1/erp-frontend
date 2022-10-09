import React, { useState } from 'react'
import { FaChevronDown,FaUser,FaRegCircle } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
const SideNavbar = () => {
    const [collapsedToggled,setCollapsedToggled] = useState('');
    const [isCollapse,setIsCollapse] = useState(false);
    const handleCollaped=(collapse)=>{
        if(collapsedToggled===collapse){
            setIsCollapse(false)
            setCollapsedToggled("")
        }else{
            setIsCollapse(true)
            setCollapsedToggled(collapse)
        }
    }

    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <BsGridFill className='bi bi-grid'/>
                        <span>Dashboard</span>
                    </a>
                </li>
                {/* End Dashboard Nav */}
                <li className="nav-item">
                    <a onClick={()=>handleCollaped('Components')}
                        className={"nav-link " +(isCollapse && collapsedToggled==='Components'?'':'collapsed')}
                        data-bs-target="#components-nav"
                        data-bs-toggle="collapse"
                    >
                        <FaUser />
                        <span>Components</span>

                        <FaChevronDown className="bi-chevron-down ms-auto" />
                    </a>
                    <ul
                        id="components-nav"
                        className={(isCollapse && collapsedToggled==='Components'?'show':'') + " nav-content collapse"} 
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="components-alerts.html">
                                <FaRegCircle/>
                                <span>Alerts</span>
                            </a>
                        </li>
                        <li>
                            <a href="components-accordion.html">
                                <FaRegCircle />
                                <span>Accordion</span>
                            </a>
                        </li>

                    </ul>
                </li>
                {/* End Components Nav */}
                <li className="nav-item">
                    <a
                       onClick={()=>handleCollaped('Forms')}
                        className={"nav-link " +(isCollapse && collapsedToggled==='Forms'?'':'collapsed')}
                        data-bs-target="#forms-nav"
                        data-bs-toggle="collapse"
                    >
                        <FaUser />
                        <span>Forms</span>
                        <FaChevronDown className=" bi-chevron-down ms-auto" />
                    </a>
                    <ul
                        id="forms-nav"
                        className={(isCollapse && collapsedToggled==='Forms'?'show':'') + " nav-content collapse"} 
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="forms-elements.html">
                                <FaRegCircle />
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
