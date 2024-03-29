import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      className="header-navbar"
      fixed="top"
      style={{ height: "8%", backgroundColor: "white" }}
    >
      <Link to="/">
        <img
          src={logo}
          width="160px"
          className="logo-img"
          alt="Keywordream logo"
          style={{ marginTop: "15px", marginLeft: "10px" }}
        />
      </Link>
      <Container></Container>
    </Navbar>
  );
};

export default Header;
