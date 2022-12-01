import React from "react";
import HeaderSection from "./styles";
import logo from "../../assets/logo-white.png";
import { AppRoutes } from "../../constants";
import { NavLink } from "react-router-dom";
import Container from "../utilities/Container.styles";
import Hero from "./Hero";
import "./styles";

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to={AppRoutes.crypto}>Crypto</NavLink>
            </li>

            <li>
              <NavLink to={AppRoutes.forex}>Forex</NavLink>
            </li>

            <li>
              <NavLink to={AppRoutes.stocks}>Stocks</NavLink>
            </li>

            <li>
              <NavLink to={AppRoutes.futures}>Futures</NavLink>
            </li>

            <li>
              <NavLink to={AppRoutes.advanced}>Advanced Charts</NavLink>
            </li>
          </ul>
        </nav>

        <Hero />
      </Container>
    </HeaderSection>
  );
};

export default Header;
