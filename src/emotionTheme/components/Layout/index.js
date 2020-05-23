import React, { forwardRef } from 'react';
import { Container } from './Container';
import { Box } from '../Box';

const Layout = forwardRef(({ children, ...props }, ref) => {
  return (
    <Container ref={ref} {...props}>
      {children}
    </Container>
  );
});

const Header = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});

const Main = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      css={{
        "gridColumnEnd": "span 12",
      }}
      {...props}
    >
      {children}
    </Box>
  );
});
const Footer = forwardRef(({ children, ...props }, ref) => {
  return (
    <Layout
      ref={ref}
      {...props}
    >
      {children}
    </Layout>
  );
});

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Main = Main;

Layout.displayName = "Layout";

export { Layout };
