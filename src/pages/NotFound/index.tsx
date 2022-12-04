import React from "react";
import Section from "./styles";
import Container from "../../components/utilities/Container.styles";
import { Button } from "../../components";
import { AppRoutes } from "../../constants";

const NotFound = () => {
  return (
    <Section>
      <Container>
        <div className="error-container">
          <div className="error" data-aos="fade-up" data-aos-duration="1000">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Oops! The page you are looking for does not exist.</p>
            <Button url={AppRoutes.home}>Back to homepage</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;
