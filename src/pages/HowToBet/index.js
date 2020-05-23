import React, { useState } from 'react';

import {
  Insights,
  Reviews,
  IntroHeader,
  SideBarSection,
  MainIntroSection,
  BettingIntroSection,
  AdvanceIntroSection,
  SportsBettingSection,
  AdvanceArticleSection
} from 'components';

import {
  Layout,
  Box
} from 'emotionTheme';

import { ReactComponent as TopIcon } from 'styles/icons/arrowTop.svg';

function HowToBet() {
  const [sideBar, setSideBar] = useState('');
 
  const renderSection = () => {
    switch (sideBar) {
      case 'Betting 101':
        return <BettingIntroSection />;
      case 'Advanced Betting Concepts':
        return <AdvanceIntroSection />;
      case 'Sports Betting Explained':
        return <SportsBettingSection />;
      case 'Using Implied Probability to Find Sports Betting Value':
        return <AdvanceArticleSection />;
      default:
        return <MainIntroSection />;
    }
  };

  const renderIntroHeader = () => {
    if ( sideBar === '' || sideBar === 'Sports Betting Explained' || sideBar === 'Using Implied Probability to Find Sports Betting Value') {
      return <IntroHeader />;
    }
    return null;
  };

  const renderRivews = () => {
    if ( sideBar === 'Advanced Betting Concepts' || sideBar === 'Using Implied Probability to Find Sports Betting Value') {
      return <Reviews />;
    }
    return null;
  };

  const handleChange = (bar) => {
    setSideBar(bar);
  };
  

  return (
    <>
      {renderIntroHeader()}
      <Layout
        display="flex"
        justifyContent="space-between"
        paddingTop={["4", "8"]}
      >
        <Box
          position="fixed"
          top="calc(100vh - 3rem)"
          right={["1.5rem", "360px", "453px", "calc((100% - 1200px)/2 + 430px)"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="10"
          height="10"
          bg="gray.300"
          opacity="20%"
          border-radius="0.25rem 0 0 0.25rem"
        >
          <TopIcon />
        </Box>
        <Box
          width="full"
          flex="1"
        >
          {renderSection()}
        </Box>
        <SideBarSection
          selected={sideBar}
          handleChange={handleChange}
        />
      </Layout>
      {renderRivews()}
      <Insights />
    </>
  );
}

export default HowToBet;