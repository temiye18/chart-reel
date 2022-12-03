import React from "react";
import { useParams } from "react-router-dom";
import {
  AdvancedRealTimeChart,
  SymbolOverview,
  CompanyProfile,
  TechnicalAnalysis,
} from "react-ts-tradingview-widgets";
import Section from "./styles";
import { advancedChartConfig } from "../../constants";
import { futuresConfig } from "../../constants/advancedChartConfig";
import { digitalAsset, futures } from "../../constants/categories";
import Container from "../../components/utilities/Container.styles";

type ChartParams = {
  slug: string;
};

const AdvancedChartsDetails = () => {
  const { slug } = useParams<ChartParams>();

  let includesAssets: boolean = false;
  let isFutures: boolean = false;
  if (slug) {
    includesAssets = digitalAsset.includes(slug);
    isFutures = futures.includes(slug);
  }

  const chartConfig = advancedChartConfig.find((chart) => chart.slug === slug);

  const futuresSymbol = futuresConfig.find((future) => future.slug === slug);

  return (
    <Section>
      <Container>
        {includesAssets && (
          <div
            className="advanced-chart"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <AdvancedRealTimeChart
              theme="dark"
              width="100%"
              height={620}
              symbol={chartConfig?.symbol}
              interval="30"
              timezone="Etc/UTC"
              container_id="tradingview_26d7b"
            />
          </div>
        )}
        {isFutures && (
          <div
            className="symbol-overview"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <SymbolOverview
              colorTheme="dark"
              width="100%"
              height={600}
              symbols={futuresSymbol?.symbol.tv}
              gridLineColor="rgba(240, 243, 250, 0.06)"
              container_id="tradingview_ade1c"
              scalePosition="right"
            />
          </div>
        )}
        {isFutures && (
          <div data-aos="fade-up" data-aos-duration="1000">
            <CompanyProfile
              colorTheme="dark"
              width="100%"
              height={420}
              isTransparent={true}
              symbol={futuresSymbol?.symbol.sp}
            />
          </div>
        )}
        {isFutures && (
          <div
            className="t-analysis"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <TechnicalAnalysis
              width="100%"
              height={450}
              isTransparent={true}
              colorTheme="dark"
              symbol={futuresSymbol?.symbol.ta}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export default AdvancedChartsDetails;
