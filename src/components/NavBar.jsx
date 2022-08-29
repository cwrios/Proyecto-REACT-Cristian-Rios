import React from "react";
import Form from "./Form";
import './NavBar.css'
import img from "../../src/img/logo.jpg";
import Cartwidget from "./Cartwidget/Cartwidget";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <img src={img} alt="" className="logo" />
          <a className="navbar-brand" href="#">
            Mi tienda
          </a>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <Cartwidget />
            <Form contBuscar="Productos" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
