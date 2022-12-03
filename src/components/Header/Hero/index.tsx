import React from "react";
import HeroSection from "./styles";
import { Button } from "../../";
import { AppRoutes } from "../../../constants";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <HeroSection>
      <h1 data-aos="fade-up" data-aos-duration="1000">
        View Real-Time Prices for all Financial Markets
      </h1>
      <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">
        Comprehensive and easy-to-use live chart that tracks the movements of
        thousands of markets including trades, quotes, aggregates, reference
        data, and news. Instant access to real-time and historical stock market
        data. Unlimited Data. Low Latency. Transparent Pricing. Realtime Data.
      </p>

      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1000"
        data-aos-once="true"
      >
        <Button url={AppRoutes.advanced.advanced} className="get-started">
          Get Started
        </Button>
      </div>
    </HeroSection>
  );
};

export default Hero;
