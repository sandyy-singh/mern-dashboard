import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Styles/Navbar.scss";
import { useState } from "react";

const Navbar = ({ toggleFun }) => {
  const [userName, setUuserName] = useState("Andrew");

  return (
    <div className="text-light">
      <nav className="navbar navbar-expand-lg p-2 w-100">
        <Link className=" navbar-brand text-light d-block " onClick={toggleFun}>
          <b>PT. Kapzet Teknologi Informasi</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-link text-light"
                aria-current="page"
              >
                ContactUs
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  mr-4">
              <li className="nav-item dropdown  mr-4">
                <Link
                  className="nav-link dropdown-toggle text-light  mr-4"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUserCircle /> <b>{userName}</b>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className=" dropdown-item fonts">
                    <div d-flex>
                      <p>{userName}</p>
                      <span>Admin account</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
