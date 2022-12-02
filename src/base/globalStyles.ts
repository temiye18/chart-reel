import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {

}

ul {
    list-style: none;

}

a {
    text-decoration: none;
}

img { max-width: 100%; }

.chart {
    margin: 7rem 0 4rem;
}
`;
