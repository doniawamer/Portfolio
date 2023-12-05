"use client";

import { createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { commonPalette } from "../../theme/colors";
// import { commonFonts } from "../../theme/font";

import { device } from "../../theme/mediaQuery";

function getTheme() {
  return {
    palette: {
      ...commonPalette,
    },
    // typography: {
    //   ...commonTypography,
    // },
    // fonts: {
    //   ...commonFonts,
    // },
    // pattern: {
    //   ...commonPatterns,
    // },
    // gradients: {
    //   ...gradients,
    // },
    // textshadows: {
    //   ...textshadows,
    // },
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

export const ThemeGlobalStyles = createGlobalStyle`


  * {
    font-family: var(--font-quicksand);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  body, html {
    padding: 0;
    margin: 0;
    background: linear-gradient(180deg, #180F1F 9.8%, #0C030E 98.56%);
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-insanibc);
    margin: 0;
  }

  p {
    margin: 0;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .modal-backdrop {
    @media (${device.lg}) {
      background-color: transparent;
      backdrop-filter: blur(62px);
      opacity: 1 !important;
      will-change: opacity;
    }
  }

  @media (${device.xxl}) {
    .modal-xl {
      --bs-modal-width: 1440px;
    }
  }

  @media (${device.xxl}) {
    .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
      max-width: 1440px;
    }
  }
`;
