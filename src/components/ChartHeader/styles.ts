import styled from "styled-components";

const Parent = styled.div`
  margin: 6rem auto 2rem;
  text-align: center;

  h1 {
    font-size: var(--heading-large);
    font-weight: var(--inter-900);
    line-height: var(--heading-line-height);
  }

  p {
    color: var(--text-color);
    line-height: var(--text-line-height);
    max-width: var(--text-width-large);
    text-align: center;
    margin: 0.8rem auto 2.2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: var(--heading-medium);
    }

    p {
      max-width: var(--text-width-medium);
    }
  }

  @media (max-width: 425px) {
    p {
      max-width: var(--text-width-small);
      font-size: var(--text-small);
    }
  }
  .btn-container {
    /* margin-top: 2rem; */

    .btn {
      padding: 1rem 1.6rem;
    }
  }
`;

export default Parent;
