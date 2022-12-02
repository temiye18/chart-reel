import React from "react";
import Container from "../utilities/Container.styles";
import Section from "./styles";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { Button } from "../";
import { mOTabs } from "../../constants";
import "aos/dist/aos.css";
const tabs = mOTabs;
const PopularChart = () => {
  return (
    <Section>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <h2>Most Popular</h2>
          <MarketOverview
            colorTheme="dark"
            dateRange="12M"
            height={800}
            locale="en"
            isTransparent={true}
            showSymbolLogo={true}
            plotLineColorGrowing="rgba(41, 98, 255, 1)"
            plotLineColorFalling="rgba(41, 98, 255, 1)"
            gridLineColor="rgba(0,0,0,0)"
            scaleFontColor="rgba(120, 123, 134, 1)"
            belowLineFillColorGrowing="rgba(41, 98, 255, 0.12)"
            belowLineFillColorFalling="rgba(41, 98, 255, 0.12)"
            belowLineFillColorGrowingBottom="rgba(41, 98, 255,0)"
            belowLineFillColorFallingBottom="rgba(41, 98, 255, 0)"
            symbolActiveColor="rgba(41, 98, 255, 0.12)"
            width="100%"
            tabs={tabs}
            showFloatingTooltip={true}
          ></MarketOverview>
        </Container>
      </div>
      <div
        className="btn-container"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1600"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <Button className="view-all">View All</Button>
      </div>
    </Section>
  );
};

export default PopularChart;
