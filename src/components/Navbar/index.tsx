import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../../store";
import Container from "../utilities/Container.styles";
import logo from "../../assets/logo-white.png";
import Nav from "./styles";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <Nav>
      <Container>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <ul>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.url}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </ul>

          <AiOutlineMenu className="menu" onClick={openSidebar} />
        </nav>
      </Container>
    </Nav>
  );
};

export default Navbar;
