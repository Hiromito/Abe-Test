import React from 'react';

import {
  Box,
  Heading,
  Text,
  Image,
} from 'emotionTheme';

import { BettingArticle } from 'components';
import Betting101 from 'styles/Betting101.png';
import { ReactComponent as ArrowRight } from 'styles/icons/arrowRight.svg';

function AdvanceIntroSection() {
  return (
    <>
      <Box
        paddingTop="8"
        borderRadius="0.25rem"
        bg="white"
      >
        <Heading
          as="h2"
          paddingLeft="2rem"
          paddingBottom="6"
        >
          Advance Betting Concepts
        </Heading>
        <Image
          width="100%"
          src={Betting101}
        />
        <Box
          paddingTop="6"
          paddingRight="14"
          paddingLeft="8"
        >
          <Text
            fontWeight="light"
            lineHeight="base"
          >
            abe’s fun and fast sports betting tutorial course helps users learn all they need to know to place their first bet.  Check out our How to Bet module above to brush up on the basic and get ready to make your first wager.
          </Text>
        </Box>
        <BettingArticle />
      </Box>
      <Box
        paddingTop="10"
        paddingBottom="16"
        display="flex"
      >
        <Heading
          as="h6"
          color="primary"
          marginLeft="auto"
        >
          Next: Sports Betting Explained <ArrowRight />
        </Heading>
      </Box>
    </>
  );
}

export { AdvanceIntroSection };