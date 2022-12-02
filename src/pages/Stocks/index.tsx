import React from "react";
import Container from "../../components/utilities/Container.styles";
import { MarketData } from "react-ts-tradingview-widgets";
import { ChartHeader } from "../../components";
import { chartHeaders } from "../../constants";
import { stocksTab } from "../../constants/chartConfig";

const Stocks = () => {
  const { heading, text } = chartHeaders.stocks;
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
          <MarketData
            colorTheme="dark"
            width="100%"
            locale="en"
            height={800}
            symbolsGroups={stocksTab}
            showSymbolLogo={true}
            isTransparent={false}
          ></MarketData>
        </div>
      </Container>
    </section>
  );
};

export default Stocks;
