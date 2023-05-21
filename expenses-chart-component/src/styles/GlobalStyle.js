import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    font-size: 18px;
    font-family: 'DM Sans', sans-serif;
}

.App {
    background-color: #F7E9DD;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;

export default GlobalStyle;
