import styled from "styled-components";

const Section = styled.footer`
  margin-bottom: 2rem;
  p {
    font-size: 1rem;
    text-align: center;
    font-weight: var(--inter-600);
    font-style: italic;
    line-height: 130%;
    letter-spacing: 0.1em;

    @media (max-width: 425px) {
      font-size: 0.7rem;
    }
  }

  .temiye,
  .ameer {
    color: var(--secondary-color);
  }
`;

export default Section;
