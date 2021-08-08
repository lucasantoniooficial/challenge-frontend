import {createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;900&display=swap');

    *, *::after, *::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body{
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        
    }

    img {
        display: block;
        max-width: 100%;
    }

    [hidden] {
        display: none;
    }
`