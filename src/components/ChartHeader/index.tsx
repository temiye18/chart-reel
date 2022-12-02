import React from "react";
import Parent from "./styles";
import { Button } from "../";
import "aos/dist/aos.css";

const ChartHeader: React.FC<{ heading: string; text: string }> = ({
  heading,
  text,
}) => {
  return (
    <Parent>
      <h1 data-aos="fade-up" data-aos-duration="1000">
        {heading}
      </h1>
      <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">
        {text}
      </p>
      <div
        className="btn-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1000"
        data-aos-once="true"
      >
        <Button className="btn">View Advanced Chart</Button>
      </div>
    </Parent>
  );
};

export default ChartHeader;
