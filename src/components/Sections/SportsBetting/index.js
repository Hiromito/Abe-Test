import React from 'react';

import {
  Box,
  Heading,
  Text,
  Image,
} from 'emotionTheme';

import { SportsBettingArticle } from 'components';
import SportsBetting from 'styles/SportsBetting.png';
import { ReactComponent as ArrowRight } from 'styles/icons/arrowRight.svg';

function SportsBettingSection() {
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
          Sports Betting Explained
        </Heading>
        <Image
          width="100%"
          src={SportsBetting}
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
            Some may argue sports are entertaining enough to watch without any money at stake, yet there’s something about a good bet that adds adrenaline to the action that and makes the proceedings more exhilarating.
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
            In this entry of our sports betting explanation series, we’ll examine why people love to bet on sports and shed some light on why there’s a nationwide movement to legalize sports betting.
          </Text>
        </Box>
        <SportsBettingArticle />
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
          Next: Betting Odds Explained <ArrowRight />
        </Heading>
      </Box>
    </>
  );
}

export { SportsBettingSection };