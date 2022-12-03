import React from "react";
import Container from "../utilities/Container.styles";
import Section from "./styles";
import { Button } from "../";
import { AppRoutes } from "../../constants";
import analysis from "../../assets/analysis.png";
import "aos/dist/aos.css";

const TechnicalAnalysis = () => {
  return (
    <Section>
      <Container>
        <div
          className="t-analysis-box"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1800"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="t-item1">
            <h2>
              Technical <br /> Analysis Widget
            </h2>
            <p>
              See what the technical analysis says about a given symbol with our
              display ratings, made for easy viewing.
            </p>
            <div className="get-started-box">
              <Button url={AppRoutes.advanced.advanced} className="get-started">
                Get Started
              </Button>
            </div>
          </div>
          <div className="t-item2">
            <img src={analysis} alt="analysis_img" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TechnicalAnalysis;
