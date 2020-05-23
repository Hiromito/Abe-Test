import React from 'react';

import {
  Box,
  Layout,
  Heading,
  Text
} from 'emotionTheme';

function IntroHeader() {
  return (
    <Box
      bg="white"
    >
      <Layout display="flex">
        <Box
          padding="3.5rem 0 2rem 0"
        >
          <Heading as="h1">How To Bet</Heading>
          <Box
            maxWidth="2lg"
            marginTop="1rem"
          >
            <Text
              fontSize="lg"
              fontWeight="light"
              lineHeight="base"
            >
              This is the place to learn how to bet, become a more effective bettor, or learn if sports betting is legal in your state. Check out our helpful sports betting tutorials and bet smarter today.
            </Text>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
}

export { IntroHeader };