import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../home/assets/logo.png"; // Import the logo image

const NavbarLinks = () => {
  const { t } = useTranslation();
  const email = localStorage.getItem("email");
  
  return (
    <div className="collapse navbar-collapse mt-lg-0 mt-4" id="navbarLinks">
      <Link className="navbar-brand" to="#">
        <img src={logo} alt="Logo" width="126" height="126" /> {/* Replace text with logo */}
      </Link>
      <ul className="navbar-nav mt-4 ">
       
       
      
      </ul>
    </div>
  );
};

export default NavbarLinks;
