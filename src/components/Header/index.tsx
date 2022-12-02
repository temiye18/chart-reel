import React from "react";
import HeaderSection from "./styles";
import logo from "../../assets/logo-white.png";
import { navLinks, AppRoutes } from "../../constants";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../../store";
import Container from "../utilities/Container.styles";
import Hero from "./Hero";
import "./styles";

const Header = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <HeaderSection>
      <Container>
        <nav className="navbar">
          <div className="logo">
            <Link to={AppRoutes.home}>
              <img src={logo} alt="logo" />
            </Link>
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

          <AiOutlineMenu onClick={openSidebar} className="menu" />
        </nav>

        <Hero />
      </Container>
    </HeaderSection>
  );
};

export default Header;
