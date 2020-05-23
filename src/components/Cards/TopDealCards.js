import React from 'react';
import useWindowSize from '@rehooks/window-size';

import {
  Box,
  Heading,
  Carousel,
} from 'emotionTheme';

import { DealCard } from 'components';

import PointBet from 'styles/icons/pointsbet.png';
import FoxBet from 'styles/icons/foxbet.png';
import Fanduel from 'styles/icons/fanduel.png';
import Draftkings from 'styles/icons/draftkings.png';

const dealcards = [
  {
    titles: [
      'Up to $250',
      'Deposit Bonus'
    ],
    image: PointBet,
    width: '59px',
    height: '12px'
  },
  {
    titles: [
      '$500 Risk-Free Bet +',
      '$500 Deposit Bonus',
    ],
    image: FoxBet,
    width: '59px',
    height: '12px'
  },
  {
    titles: [
      '$500 Risk-Free Bet'
    ],
    image: Fanduel,
    width: '62px',
    height: '15px'
  },
  {
    titles: [
      '$500 Risk-Free Bet',
      '+ 20% Deposit Bonus'
    ],
    image: Draftkings,
    width: '46px',
    height: '30px'
  },
];

function TopDealCards() {

  const windowSize = useWindowSize();
  const isMobile = windowSize.innerWidth < 768;
  let renderData = dealcards;

  if (isMobile) {
    renderData = dealcards.slice(0, 2);
  }

  return (
    <Box
      position="relative"
      width={["full", "xs"]}
      padding={["0", "6"]}
      marginTop={["10", "0"]}
      paddingBottom="2"
      border={["none", "1px"]}
      borderColor="gray.200"
      borderRadius="0.25rem"
    >
      <Heading
        as="h3"
        display={["none", "block"]}
      >
        Top Deals Today
      </Heading>
      <Heading
        as="h3"
        display={["block", "none"]}
      >
        Top Deals
      </Heading>
      <Heading
        as="h3"
        display={["block", "none"]}
      >
        in [New Jersey]
      </Heading>
      <Carousel
        marginTop="4"
        flexDirection="column"
      >
      {
        renderData.map(({titles, image, width, height}, index) => (
          <DealCard key={index} titles={titles} image={image} width={width} height={height} />
        ))
      }
      </Carousel>
    </Box>
  );
}

export { TopDealCards };