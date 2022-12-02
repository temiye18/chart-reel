import styled from "styled-components";

const Section = styled.section`
  padding-top: 4.5rem;
  h2 {
    font-size: 2.6rem;
    line-height: 130%;
    font-weight: var(--inter-900);
    margin-bottom: 1.8rem;
  }

  .btn-container {
    margin: 0 auto;
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    /* .view-all {
      padding: 1rem 4rem;
    } */
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
      padding-left: 1.3rem;
    }
  }
`;

export default Section;
