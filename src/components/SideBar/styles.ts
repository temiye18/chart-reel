import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  height: 100vh;
  /* width: 254px; */
  width: 100%;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: var(--primary-color);
  box-shadow: 0 -4px 10px rgba(162, 89, 255, 0.8);
  transition: all 0.6s linear;
  transform: translateX(120%);
  padding: 2rem 2rem;

  @media (min-width: 821px) {
    display: none;
  }

  &.show-sidebar {
    transform: translateX(0);
  }
  .close-box {
    display: flex;

    .close {
      margin-left: auto;
      color: var(--white);
      font-weight: var(--inter-900);
      font-size: 1.7rem;
    }
  }

  nav ul {
    display: grid;
    row-gap: 4rem;
    margin-top: 2rem;
    place-items: center;

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
`;

export default Aside;
