import styled from "styled-components";
import bg from "../../assets/section3.png";

const Section = styled.section`
  padding: 7rem 0 4rem;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  /* min-height: 300px; */
  .t-analysis-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 1rem;
    justify-content: space-around;
    align-items: center;
    /* padding: 0 5rem; */

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      row-gap: 4rem;
    }
  }

  .t-item1 {
    justify-self: center;
    align-self: center;
    h2 {
      font-size: 2.3rem;
      font-weight: var(--inter-900);
      line-height: 130%;

      @media (max-width: 768px) {
        font-size: 1.9rem;
        text-align: center;
      }

      @media (max-width: 425px) {
        font-size: 1.5rem;
      }
    }
    p {
      line-height: 150%;
      color: #898ca9;
      max-width: 400px;
      margin: 0.6rem 0 2rem;
      @media (max-width: 768px) {
        text-align: center;
        font-size: 0.87rem;
      }

      @media (max-width: 425px) {
        max-width: 300px;
      }
    }

    .get-started-box {
      .get-started {
        padding: 0.6rem 1.5rem;
        font-size: 1rem;
      }
      @media (max-width: 768px) {
        text-align: center;
        .get-started {
          font-size: 0.75rem;
        }
      }
    }
  }

  .t-item2 {
    justify-self: center;
    align-self: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

export default Section;
