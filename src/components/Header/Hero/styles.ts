import styled from "styled-components";

const HeroSection = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 787px;
  margin-top: 7rem;
  h1 {
    font-weight: var(--inter-900);
    font-size: 3.3rem;
    line-height: 130%;
  }

  p {
    font-size: 1rem;
    line-height: 150%;
    color: #898ca9;
    max-width: 689px;
    margin: 0.6rem auto 2.5rem;
  }

  /* .get-started {
    padding: 1rem 4rem;
  } */

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.875rem;
      max-width: 470px;
      margin-bottom: 1.7rem;
    }
  }

  @media (max-width: 425px) {
    p {
      max-width: 350px;
    }
  }
`;

export default HeroSection;
