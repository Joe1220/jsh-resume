import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export default createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    font-family:  'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: "#000000";
  }
  a {
    text-decoration: none;
  }
  input:focus {
    outline: none;
  }
`
