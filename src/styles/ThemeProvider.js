import React from 'react';
import {ThemeProvider as StyledProvider} from "styled-components";

export const theme = {
  colors: {
    primary:{
      main: "#ffc187",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121"
    },
    danger:{
      main: "#ff3d00",
      dark: "#d22a00",
      text: "#212121"
    }
  }
};

const ThemeProvider = ({children}) => (
  <StyledProvider theme={theme}>
    {children}
  </StyledProvider>
);

export default ThemeProvider;
