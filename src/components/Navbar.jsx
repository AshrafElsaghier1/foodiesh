import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faCog, faList } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const links = [
    {
      name: "Home",
      path: "/foodiesh",
      icon: faHome,
    },
    {
      name: "Receips",
      path: "/receips",
      icon: faList,
    },
    {
      name: "Sittings",
      path: "/sittings",
      icon: faCog,
    },
  ];
  const location = useLocation();
  return (
    <>
      <div className="navbar container">
        <Link to="/foodiesh" className="logo">
          F<span>oo</span>diesHub
        </Link>
        <div className="nav-links">
          {links.map(({ name, path }) => {
            return (
              <Link
                to={path}
                key={name}
                className={` ${location.pathname === path ? "active" : ""} `}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div
          className={`${showSidebar ? " active" : ""} menu-bar`}
          onClick={toggleSidebar}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && (
        <Sidebar
          links={links}
          close={toggleSidebar}
          showSidebar={showSidebar}
        />
      )}
    </>
  );
};

export default Navbar;
