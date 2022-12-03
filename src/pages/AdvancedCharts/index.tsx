import React from "react";
import { CategoryHeader, AdvancedList } from "../../components";
import { advancedListData } from "../../constants";
import Container from "../../components/utilities/Container.styles";
import { Section, FlexContainer } from "./styles";

const AdvancedCharts = () => {
  return (
    <Section>
      <CategoryHeader text="CRYPTO" animation="slide-left" duration="2000" />

      <Container>
        <FlexContainer>
          {advancedListData.crypto.map((item) => (
            <AdvancedList {...item} />
          ))}
        </FlexContainer>
      </Container>

      <CategoryHeader text="FOREX" animation="slide-left" duration="2000" />

      <Container>
        <FlexContainer>
          {advancedListData.forex.map((item) => (
            <AdvancedList {...item} />
          ))}
        </FlexContainer>
      </Container>

      <CategoryHeader text="STOCK" animation="slide-left" duration="2000" />

      <Container>
        <FlexContainer>
          {advancedListData.stocks.map((item) => (
            <AdvancedList {...item} />
          ))}
        </FlexContainer>
      </Container>

      <CategoryHeader text="FUTURES" animation="slide-left" duration="2000" />

      <Container>
        <FlexContainer>
          {advancedListData.futures.map((item) => (
            <AdvancedList {...item} />
          ))}
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default AdvancedCharts;
