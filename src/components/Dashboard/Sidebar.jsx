import React from "react";
import sempoa from "../../Images/sempoa-logo.png";
import { NavLink } from "react-router-dom";
import "./Styles/Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="d-flex justify-content-between flex-column  p-3 vh-100 position-sticky cardsiside ">
      <div className="flex-column">
        <NavLink
          className="d-flex justify-content-center align-item-center  "
          to="/"
        >
          <img
            src={sempoa}
            alt="krishi_logo"
            className="my-5"
            width={"70px"}
            height={"40px"}
          />
        </NavLink>

        <ul className="nav nav-pills  flex-column  ">
          <li className="nav-item ">
            <NavLink className="nav-link text-light " to="/">
              DashBoard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light  " to="/Conta">
              CropAdvisory
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light " to="/Location">
              CropSection
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light " to="/Contact">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light  " to="/Login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <div className="n">
          <ul className="nav  ">
            <li className="nav-item ms-3">
              <button className="btn bg-light mb-5 ">logout</button>
            </li>
          </ul>
          <span className="nav-item">© 2021 SEMPOA ERP</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
