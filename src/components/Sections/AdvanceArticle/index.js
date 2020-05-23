import React from 'react';

import {
  Box,
  Heading,
  Text,
  Image,
} from 'emotionTheme';

import { BettingValueArticle } from 'components';
import BettingValue from 'styles/BettingValue.png';
import { ReactComponent as ArrowRight } from 'styles/icons/arrowRight.svg';

function AdvanceArticleSection() {
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
          Using Implied Probability to Find Sports Betting Value
        </Heading>
        <Image
          width="100%"
          src={BettingValue}
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
            Implied probability in sports betting is defined as, "a conversion of betting odds into a percentage taking into account the bookmaker margin to express the expected probability of an outcome occurring."
          </Text>
        </Box>
        <Box
          paddingTop="6"
          paddingRight="14"
          paddingLeft="8"
        >
          <Text
            fontWeight="light"
            lineHeight="base"
          >
            For the sake of greater simplicity: implied probability uses basic math to convert traditional odds expressed in the form of a payout (i.e. +500) into a percentage. That percentage tells you what the market expects the outcome of the event to be – these are also referred to as a implied odds.
          </Text>
        </Box>
        <Box
          paddingTop="6"
          paddingRight="14"
          paddingLeft="8"
        >
          <Text
            fontWeight="light"
            lineHeight="base"
          >
            When it comes to odds, if the “true” probability is greater than the implied probability, the better value the bet is. Let’s try to break down this advanced betting strategy into a more digestible, tactile form so you can make use of the concept when you place your next wager.
          </Text>
        </Box>
        <BettingValueArticle />
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

export { AdvanceArticleSection };