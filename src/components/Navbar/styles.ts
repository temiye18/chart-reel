import styled from "styled-components";
const Nav = styled.header`
  padding: 1rem 0;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 200px;

      @media (max-width: 768px) {
        width: 170px;
      }
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

      @media (max-width: 768px) {
        display: none;
      }
    }

    .menu {
      display: none;
      color: var(--white);
      font-weight: var(--inter-900);
      font-size: 2rem;

      @media (max-width: 820px) {
        display: block;
      }
    }
  }
`;

export default Nav;
