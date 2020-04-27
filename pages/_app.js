import React from 'react';
import NextApp from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import theme from '../styles/theme';
import { prismDarkTheme } from '../styles/prism';
import MDXComponents from '../components/MDXComponents';
import SEO from '../next-seo.config';

const GlobalStyle = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        ${prismDarkTheme};

        ::selection {
          background-color: #47a3f3;
          color: #fefefe;
        }

        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: white;
        }
      `}
    />
    {children}
  </>
);

class App extends NextApp {
  render() {
    const { Component } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component />
          </GlobalStyle>
        </MDXProvider>
      </ThemeProvider>
    );
  }
}

export default App;
