import React, { useContext } from 'react'
import "./Search.css"
import { FaBell } from "react-icons/fa";
import dpImage from "../../assets/images/dp-image.png"
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { ResponseDataContext } from '../../api/Context';


function Search() {

    const { open, setOpen } = useContext(ResponseDataContext);
    const handleMenuClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row top-section">
                    <div className="col-md-8 search-section d-flex">
                        {
                            open && (
                                <div className="menuIconContainer">
                                    <AiOutlineMenuFold className='menuIcon' onClick={handleMenuClick} style={open ? { display: 'block' } : {display: "none"}}/>
                                </div>
                            )
                        }
                        <div className="menuIconContainer">
                            <AiOutlineMenuUnfold className='menuIcon' onClick={handleMenuClick} style={open ? { display: 'none' } : {display: "block"}}/>
                        </div>
                        <div className="form-group flex-grow-1 search-box pt-4">
                            <span className="search-icon"><IoSearch /></span>
                            <input type="text" className="form-control" placeholder="Search your question here or ask TiiA" />
                            <span className="microphone-icon"><FaMicrophone /></span>
                        </div>
                    </div>

                    <div className="col-md-4 pt-4 container-fluid info-section">
                        <div className="d-flex align-items-center">
                            <div className="notification me-4">
                                <FaBell className='bell-icon' />
                                <span className="position-absolute notification-count">
                                    2
                                </span>
                            </div>
                            <div className="profileImage">
                                <img src={dpImage} alt="dpImage" className="ml-2 dpImage" />
                                <span className="position-absolute online-status"></span>
                            </div>
                            <div className="username">
                                <span className="ml-2">Username</span>
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-3">
                <div className="row">
                    <div className="col-md-8 license">
                        <span className='cur-license'>Current License:</span>
                        <span className="license-name">USD/CAD</span>
                        <span className="license-name">AUD/USD</span>
                    </div>
                    <div className="col-md-4 welcome">
                        <span className="welcome-usr">Welcome, Username</span>
                        <span className="wel-subtitle">Good to see you again</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search