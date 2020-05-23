import React from 'react';
import useWindowSize from '@rehooks/window-size';

import {
  Layout,
  Box,
  Heading,
  Carousel
} from 'emotionTheme';

import { Card, SmarterCard } from 'components';

import Card1 from 'styles/Card1.png';
import Card2 from 'styles/Card2.png';
import Card3 from 'styles/Card3.png';
import Card4 from 'styles/Card4.png';

const cards = [
  {
    image: Card1,
    description: "West Virginia Aims to Be First State to Legalize Betting on Politics"
  },
  {
    image: Card2,
    description: "Coronavirus Postpones Major Sports Leagues: What Can I Bet On?"
  },
  {
    image: Card3,
    description: "Coronavirus in Sports: Tracking News, Updates on Major League Cancellations"
  },
  {
    image: Card4,
    description: "Tom Brady to Buccaneers: How QB Legend is Affecting NFL Futures Odds"
  },
];

function Insights() {

  const windowSize = useWindowSize();
  const isMobile = windowSize.innerWidth < 768;
  let renderData = cards;

  if (isMobile) {
    renderData = cards.slice(0, 2);
  }

  return (
    <Box
      paddingTop="14"
      paddingBottom="28"
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
            Insights
          </Heading>
          <Heading
            as="h2"
            display={["block", "none"]}
          >
            Latest Insights
          </Heading>
          <Carousel
            display="flex"
            flexWrap="wrap"
            marginLeft="-0.75rem"
            marginTop="5"
          >
            {
              renderData.map(({image, description}, index) => (
                <Card key={index} image={image} description={description} />
              ))
            }
          </Carousel>
        </Box>
        <Box>
          <SmarterCard />
        </Box>
      </Layout>
    </Box>
  );
}

export { Insights };