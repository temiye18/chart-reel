import React from "react";
import Container from "../../components/utilities/Container.styles";
import { ChartHeader } from "../../components";
import { MarketData } from "react-ts-tradingview-widgets";
import { chartHeaders } from "../../constants";
import { futuresTab } from "../../constants/chartConfig";

const Futures = () => {
  const { heading, text } = chartHeaders.futures;
  return (
    <section>
      <Container>
        <ChartHeader heading={heading} text={text} />

        <div className="chart">
          <MarketData
            colorTheme="dark"
            width="100%"
            height={800}
            symbolsGroups={futuresTab}
          ></MarketData>
        </div>
      </Container>
    </section>
  );
};

export default Futures;
