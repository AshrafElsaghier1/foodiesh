import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ links, close, showSidebar }) => {
  const location = useLocation();

  return (
    <div className={`sidebar ${showSidebar ? "active" : ""} `} onClick={close}>
      <div className="sidebar-menu">
        {links.map(({ name, path, icon }) => {
          return (
            <Link
              to={path}
              key={name}
              className={` ${location.pathname === path ? "active" : ""} `}
            >
              <FontAwesomeIcon icon={icon} />
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
