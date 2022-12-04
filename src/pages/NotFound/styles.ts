import styled from "styled-components";

const Section = styled.section`
  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  .error {
    text-align: center;
    h1 {
      font-size: 9rem;
      font-weight: var(--inter-900);
      color: var(--secondary-color);

      @media (max-width: 545px) {
        font-size: 6rem;
      }
    }
    p {
      margin: 2rem 0 3rem;
      font-size: 1.1rem;
      font-weight: var(--inter-600);
    }
  }
`;

export default Section;
