import styled from "styled-components";

const Item = styled.div`
  display: grid;
  row-gap: 1rem;
  border: 1px solid white;
  border-radius: 25px;
  text-align: center;
  padding: 3rem 0;

  h4,
  h3 {
    line-height: var(--heading-line-height);
    font-weight: var(--inter-600);
    text-transform: uppercase;
  }

  h4 {
    color: #5c5c5c;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.4rem;
    margin-bottom: 0.3rem;
    color: var(--secondary-color);
    font-weight: var(--inter-600);
    font-size: 0.876rem;
  }
  .btn {
    padding: 0.6rem 0.8rem;
  }
`;

export default Item;
