import styled from "styled-components";
import bg from "../../assets/bg.png";

const HeaderSection = styled.header`
  padding: 1rem 0;
  min-height: 700px;
  background: url(${bg}) no-repeat center center/cover;
  .navbar {
    /* position: fixed;
    top: 0;
    width: 90%;
    margin: 0 auto;
    left: 0; */
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 15%;
    }

    ul {
      display: flex;
      align-items: center;
      column-gap: 1rem;

      a {
        color: var(--white);
        font-weight: var(--inter-600);
        padding: 8px 15px;
        transition: background 0.6s ease-in-out;
        &:hover {
          background-color: var(--white);
          color: var(--secondary-color);
          border-radius: 4px;
        }

        &.active {
          background-color: var(--white);
          color: var(--secondary-color);
          border-radius: 4px;
        }
      }
    }
  }
`;

export default HeaderSection;
