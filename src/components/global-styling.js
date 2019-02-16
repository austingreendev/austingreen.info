import { createGlobalStyle } from 'styled-components';

/* Global Styling */
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Roboto');

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
  }
`;
