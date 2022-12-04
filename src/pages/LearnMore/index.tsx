import React from "react";

import { useParams } from "react-router-dom";
import {
  SymbolOverview,
  CompanyProfile,
  TechnicalAnalysis,
} from "react-ts-tradingview-widgets";
import Section from "./styles";
import { learnMoreConfig } from "../../constants";
import Container from "../../components/utilities/Container.styles";

type ChartParams = {
  slug: string;
};

const LearnMore = () => {
  const { slug } = useParams<ChartParams>();
  const chartConfig = learnMoreConfig.find((chart) => chart.slug === slug);
  return (
    <Section>
      <Container>
        <div
          className="symbol-overview"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <SymbolOverview
            colorTheme="dark"
            width="100%"
            height={600}
            symbols={chartConfig?.symbol.tv}
            gridLineColor="rgba(240, 243, 250, 0.06)"
            container_id="tradingview_ade1c"
            scalePosition="right"
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <CompanyProfile
            colorTheme="dark"
            width="100%"
            height={420}
            isTransparent={true}
            symbol={chartConfig?.symbol.spta}
          />
        </div>

        <div className="t-analysis" data-aos="fade-up" data-aos-duration="1000">
          <TechnicalAnalysis
            width="100%"
            height={450}
            isTransparent={true}
            colorTheme="dark"
            symbol={chartConfig?.symbol.spta}
          />
        </div>
      </Container>
    </Section>
  );
};

export default LearnMore;
