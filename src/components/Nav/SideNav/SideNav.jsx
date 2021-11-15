import React, { useState, useContext } from "react";
import "./SideNav.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/global/lujam-logo-green.svg";
import MobileNav from "../MobileNav/MobileNav";
import { ReactComponent as HomeIcon } from "../../../assets/nav/home.svg";
import { ReactComponent as SecurityIcon } from "../../../assets/nav/security.svg";
import { ReactComponent as DevicesIcon } from "../../../assets/nav/device.svg";
import { ReactComponent as AlertIcon } from "../../../assets/nav/alerts.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/nav/settings.svg";
import { ReactComponent as GreyDropdown } from "../../../assets/global/grey-dropdown.svg";
import { UserContext } from "../../../context/UserContext/UserContext";

const SideNav = (props) => {
  const { selectedPage } = props;
  const { handleLogout } = useContext(UserContext);

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="navigation">
      {showNav && <MobileNav handleClick={toggleNav} />}
      <div className="side-nav">
        <div className="side-nav__logo">
          <img src={logo} alt="" />
        </div>

        <div className="side-nav__items">
            <Link to="/dashboard" className="side-nav__text"> 
              <div className="side-nav__dashboard side-nav__item">
                <HomeIcon className="side-nav__item--image" />
                <p>Dashboard</p>
              </div>
            </Link>
            <Link to="/security" className="side-nav__text">
              <div className="side-nav__security side-nav__item">
                <SecurityIcon className="side-nav__item--image" />
              < p>Security</p> 
              </div>
            </Link>
            <Link to="/devices" className="side-nav__text">
              <div className="side-nav__devices side-nav__item">
                <DevicesIcon className="side-nav__item--image" />
                <p>Devices</p> 
              </div>
            </Link>
            <Link to="/alerts" className="side-nav__text">
              <div className="side-nav__alerts side-nav__item">
                <AlertIcon className="side-nav__item--image" />
                <p>Alerts</p> 
              </div>
            </Link>
            <Link to="/settings" className="side-nav__text">
               <div className="side-nav__settings side-nav__item">
                <SettingsIcon className="side-nav__item--image" />
                <p>Settings</p> 
               </div>
            </Link>
        <div className="side-nav__logout">
          <p onClick={handleLogout}>Logout</p>
        </div>
      </div>
        </div>

      <div className="mobile-nav-header" onClick={toggleNav}>
        <div className="mobile-nav-header__items-left">
          <HomeIcon className="mobile-nav-header__item--image" />
          <p className="mobile-nav-header__heading">{selectedPage}</p>
        </div>
        <GreyDropdown className="mobile-nav-header____image--arrow" />
      </div>
    </div>
  );
};

export default SideNav;
