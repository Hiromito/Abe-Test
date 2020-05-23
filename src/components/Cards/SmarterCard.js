import React from 'react';

import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  Image
} from 'emotionTheme';

import Phone from 'styles/Phone.png';

function SmarterCard() {
  return (
    <Box
      position="relative"
      width={["full", "xs"]}
      padding={["0", "6"]}
      marginTop={["8", "0"]}
      paddingRight="26"
      border={["none", "1px"]}
      borderColor="gray.200"
      borderRadius="0.25rem"
    >
      <Box>
        <Heading as="h3" color="primary">
          Bet Smarter
        </Heading>
        <Heading as="h3">
          with abe Insights
        </Heading>
        <Box
          marginTop="4"
        >
          <Text>The 3-minute newsletter with fresh takes on the betting news</Text>
        </Box>
        <Input
          id="user-email"
          type="email"
          name="email"
          marginTop="8"
          placefolder="your-email@gmail.com"
        />
        <Button
          marginTop="10"
          height="12"
          width={"111px"}
        >
          Sign up
        </Button>
      </Box>
      <Box
        position="absolute"
        right="0"
        bottom={"-0.25rem"}
      >
        <Image
          src={Phone}
          width="100px"
          height="200px"
        />
      </Box>
    </Box>
  );
}

export { SmarterCard };