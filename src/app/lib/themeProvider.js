"use client";
import {
  createGlobalStyle,
  ThemeProvider as StyledComponentsThemeProvider,
} from "styled-components";
import { commonPalette } from "../../theme/colors";

import { device } from "../../theme/mediaQuery";

function getTheme() {
  return {
    palette: {
      ...commonPalette,
    },
  };
}

export default function ThemeProvider({ children }) {
  const themeObject = getTheme();
  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
