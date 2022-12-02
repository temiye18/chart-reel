import React from "react";
import { ChartHeader } from "../../components";
import { chartHeaders } from "../../constants";
import { Screener } from "react-ts-tradingview-widgets";

import Container from "../../components/utilities/Container.styles";

const Forex = () => {
  const { heading, text } = chartHeaders.forex;
  return (
    <section>
      <Container>
        <ChartHeader heading={heading} text={text} />

        <div
          className="chart"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1200"
        >
          <Screener
            colorTheme="dark"
            width="100%"
            height={800}
            locale="en"
            defaultScreen="general"
            defaultColumn="overview"
            market="forex"
            showToolbar={false}
          ></Screener>
        </div>
      </Container>
    </section>
  );
};

export default Forex;
