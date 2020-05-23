import React, { useState, useEffect } from 'react';

import { Layout } from 'emotionTheme';

import {
  Header,
  Footer
} from 'components';

function MainLayout({children}) {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  const isScrolled = scrollTop > 50;
  
  return (
    <>
      <Layout.Header
        top="0"
        position={isScrolled ? 'sticky' : "" }
        bg="white"
        zIndex="sticky"
      >
        <Header />
      </Layout.Header>
      <Layout.Main bg="gray.50">
        {children}
      </Layout.Main>
      <Layout.Footer
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="white"
      >
        <Footer />
      </Layout.Footer>
    </>
  );
};

export default MainLayout;