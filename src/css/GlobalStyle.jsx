import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        scroll-behavior: smooth;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: var(--color6);
    }

    :root{
        --color1: #860303;
        --color2: #a60303;
        --color3: #d92b2b;
        --color4: #d94a4a;
        --color5: #d94a4a;
        --color6: #F4F4F4;
        --color7: #FFFFFFFF;
        --color8: #000000FF,
        --transition: 0.5s;
    }
`

export default GlobalStyle