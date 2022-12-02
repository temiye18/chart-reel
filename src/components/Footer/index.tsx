import React from "react";
import Section from "./styles";
import Container from "../utilities/Container.styles";

const Footer = () => {
  return (
    <Section>
      <Container>
        <p>
          Developed by{" "}
          <span>
            <a
              className="temiye"
              href="https://www.linkedin.com/in/akinyemi-temi/"
              target="_blank"
              rel="noreferrer"
            >
              Temiye
            </a>
          </span>{" "}
          & Designed by{" "}
          <span>
            <a
              className="ameer"
              href="https://ameerbamigbayan.com.ng/"
              target="_blank"
              rel="noreferrer"
            >
              Ameer Bamigbayan
            </a>
          </span>
        </p>
      </Container>
    </Section>
  );
};

export default Footer;
