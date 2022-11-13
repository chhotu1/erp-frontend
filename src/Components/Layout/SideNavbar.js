import React, { useState } from 'react'
import { FaChevronDown,FaUser,FaRegCircle, FaUserAlt, FaUsers } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import RouteName from '../../CustomRoutes/RouteName';
const SideNavbar = () => {
    const [collapsedToggled,setCollapsedToggled] = useState('');
    const [isCollapse,setIsCollapse] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', function(event){
        setWidth(window.innerWidth)
    });

    const handleCollaped=(collapse)=>{
        if(collapsedToggled===collapse){
            setIsCollapse(false)
            setCollapsedToggled("")
        }else{
            setIsCollapse(true)
            setCollapsedToggled(collapse)
        }
    }

    const clickMenu=()=>{
        if(width <= 768){
            document.body.classList.toggle('toggle-sidebar');
        }
    }

    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item" onClick={clickMenu}>
                    <Link className="nav-link" to="/">
                        <BsGridFill className='bi bi-grid'/>
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* End Dashboard Nav */}
                {/* <li className="nav-item">
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
                </li> */}
                {/* End Components Nav */}
                {/* <li className="nav-item">
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
                </li> */}
                <li className="nav-item" onClick={clickMenu}>
                    <Link to={RouteName.USER} className="nav-link collapsed" >
                        <FaUser />
                        <span>User management</span>
                    </Link>
                </li>
                <li className="nav-item" onClick={clickMenu}>
                    <Link to={RouteName.CASHBOOK} className="nav-link collapsed" >
                        <FaUsers />
                        <span>Cashbook</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default SideNavbar
