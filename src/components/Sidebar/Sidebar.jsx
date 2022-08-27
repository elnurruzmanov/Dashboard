import React from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import Home from "../Lib/Home";
import Logo from "../Lib/Svgs/Logo";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <ul className="sidebar_list">
        <li className="sidebar_item ">
          <NavLink to="/" className="sidebar_link sidebar_link-active" activeClassName="sidebar_link-active" exact>
            <span className="sidebar_link-item sidebar_link-active-item">
              <Home />
            </span>
          </NavLink>
        </li>
        <li className="sidebar_item ">
          <NavLink to="/discount" className="sidebar_link" activeClassName="sidebar_link-active">
            <span className="sidebar_link-item">
              <Home />
            </span>
          </NavLink>
        </li>
        <li className="sidebar_item ">
          <NavLink to="/graph" className="sidebar_link" activeClassName="sidebar_link-active">
            <span className="sidebar_link-item">
              <Home />
            </span>
          </NavLink>
        </li>
        <li className="sidebar_item ">
          <NavLink to="/order" className="sidebar_link" activeClassName="sidebar_link-active">
            <span className="sidebar_link-item">
              <Home />
            </span>
          </NavLink>
        </li>
        <li className="sidebar_item ">
          <NavLink to="/notification" className="sidebar_link" activeClassName="sidebar_link-active">
            <span className="sidebar_link-item">
              <Home />
            </span>
          </NavLink>
        </li>
        <li className="sidebar_item ">
          <NavLink to="/settings" className="sidebar_link" activeClassName="sidebar_link-active">
            <span className="sidebar_link-item">
              <Home /> 
            </span>
          </NavLink>
        </li>
      </ul>
      <button className="sidebar_btn">
        <Home />
      </button>
    </div>
  );
};

export default Sidebar;
