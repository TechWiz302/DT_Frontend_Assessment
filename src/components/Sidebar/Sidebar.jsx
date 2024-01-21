import React, { useContext } from 'react'
import "./Sidebar.css"
import logoImage from "../../assets/images/logo.png"
import logo from "../../assets/images/logo-image.png"
import { TbWorldWww } from "react-icons/tb";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { RiPresentationLine } from "react-icons/ri";
import { HiBellAlert } from "react-icons/hi2";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { ResponseDataContext } from '../../api/Context';
import { RxCross2 } from "react-icons/rx";


function Sidebar() {

  const { open, setOpen } = useContext(ResponseDataContext);

  const handleCrossClick = () => {
    setOpen(false)
  }

  return (
    <>
      {open && (
        <div className="sidebar">
          <div className="logo-image">
            <RxCross2 className='cross-icon' onClick={handleCrossClick}/>
            <img className='largeLogo' src={logoImage} alt="logo-image" />
            <img className='smallLogo' src={logo} alt="logo" />
          </div>
          <div className="sidebarMenu">
            <div className="sidebarTitle">
              <p className="title">MAIN MENU</p>
            </div>
            <div className="sidebarItem">
              <ul className="sidebarList">
                <li className='sidebarActive'>
                  <TbWorldWww />
                  <span><a href="/">News Quant</a></span>
                </li>
                <li>
                  <HiOutlinePresentationChartBar />
                  <span><a href="/">Real Economics Indicators</a></span>
                </li>
                <li>
                  <RiPresentationLine />
                  <span><a href="/">One Score</a></span>
                </li>
                <li>
                  <HiBellAlert />
                  <span><a href="/">Alert Central</a></span>
                </li>
                <li>
                  <BsFillTelephonePlusFill />
                  <span><a href="/">Customer Support</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar