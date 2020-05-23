import React from 'react';
import useWindowSize from '@rehooks/window-size';

import {
  Layout,
  Box,
  Heading,
  Carousel
} from 'emotionTheme';

import { Review, TopDealCards } from 'components';

import Bet365 from 'styles/icons/bet365.png';
import BetAmerica from 'styles/icons/betamerica.png';
import Caesars from 'styles/icons/caesars.png';
import FoxBet from 'styles/icons/foxbet.png';
import ScoreBet from 'styles/icons/scorebet.png';
import Sugarhouse from 'styles/icons/sugarhouse.png';
import UniBet from 'styles/icons/unibet.png';
import WilliamHill from 'styles/icons/williamhill.png';

const reviews = [
  {
    image: FoxBet,
    rating: "9.3",
    width: "66px",
    height: "13px"
  },
  {
    image: ScoreBet,
    rating: "9.2",
    width: "70px",
    height: "10px"
  },
  {
    image: UniBet,
    rating: "9.2",
    width: "55px",
    height: "20px"
  },
  {
    image: Bet365,
    rating: "9.0",
    width: "66px",
    height: "16px"
  },
  {
    image: BetAmerica,
    rating: "8.8",
    width: "66px",
    height: "14px"
  },
  {
    image: Sugarhouse,
    rating: "8.6",
    width: "45px",
    height: "30px"
  },
  {
    image: Caesars,
    rating: "8.2",
    width: "56px",
    height: "25px"
  },
  {
    image: WilliamHill,
    rating: "8.0",
    width: "70px",
    height: "15px"
  },
];

function Reviews() {

  const windowSize = useWindowSize();
  const isMobile = windowSize.innerWidth < 768;
  let renderData = reviews;

  if (isMobile) {
    renderData = reviews.slice(0, 4);
  }

  return (
    <Box
      paddingTop="14"
      bg="white"
    >
      <Layout
        display="flex"
        justifyContent="space-between"
        flexDirection={["column", "row"]}
      >
        <Box width="full" flex="1">
          <Heading
            as="h2"
            display={["none", "block"]}
          >
            Sportsbooks Reviews
          </Heading>
          <Heading
            as="h2"
            display={["block", "none"]}
          >
            [New Jersey]
          </Heading>
          <Heading
            as="h2"
            display={["blokc", "none"]}
          >
            Sportsbooks Reviews
          </Heading>
          <Carousel
            display="flex"
            flexWrap="wrap"
            marginLeft="-1rem"
            marginTop="4"
          >
            {
              renderData.map(({image, rating, width, height}, index) => (
                <Review key={index} image={image} width={width} height={height} rating={rating} />
              ))
            }
          </Carousel>
        </Box>
        <Box>
          <TopDealCards />
        </Box>
      </Layout>
    </Box>
  );
}

export { Reviews };