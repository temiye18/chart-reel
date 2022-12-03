import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 4rem;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 559px) {
    padding: 0 4rem;
  }
  padding: 0 4rem;
`;

export { Section, FlexContainer };
