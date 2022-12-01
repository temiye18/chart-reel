import styled from "styled-components";

const LinkBtn = styled.span`
  .link-btn {
    background: var(--secondary-color);
    color: #fff;
    padding: 1rem 4rem;
    font-weight: var(--inter-600);
    border-radius: 10.5px;
    transition: background 0.4s ease-in-out;

    &:hover {
      background: var(--white);
      color: var(--secondary-color);
    }
  }
`;

export default LinkBtn;
