import PropTypes from 'prop-types';
import React from 'react';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
//* Local imports
import GlobalStyles from '../styles/globalstyles';
import nav from './nav';
import footer from './footer';
import theme from '../styles/theme';

// ? https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

function Layout({ children }) {
  const i = true;
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <nav />
        <main>{children}</main>
        <footer />
      </ThemeProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
