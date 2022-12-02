import React from "react";
import Container from "../../components/utilities/Container.styles";
import { ChartHeader } from "../../components";
import { chartHeaders } from "../../constants";
import { MarketData } from "react-ts-tradingview-widgets";
import { cryptoTab } from "../../constants/chartConfig";

const Crypto = () => {
  const { heading, text } = chartHeaders.crypto;

  return (
    <section>
      <Container>
        <ChartHeader heading={heading} text={text} />

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="chart"
        >
          <MarketData
            colorTheme="dark"
            width="100%"
            height={800}
            symbolsGroups={cryptoTab}
          ></MarketData>
        </div>
      </Container>
    </section>
  );
};

export default Crypto;
