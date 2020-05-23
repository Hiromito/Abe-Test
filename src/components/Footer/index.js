import React from 'react';

import {
  Box,
  Flex,
  Text
} from 'emotionTheme';

import { ReactComponent as Twitter } from 'styles/icons/Twitter.svg';
import { ReactComponent as Instagram } from 'styles/icons/Instagram.svg';

const navItems = [
  {
    key: "about",
    label: "About Us"
  },
  {
    key: "works",
    label: "How Abe Works"
  },
  {
    key: "policy",
    label: "Privacy Policy"
  },
  {
    key: "terms",
    label: "Terms of Service"
  }
];

function Footer() {
  return (
    <Flex
      direction={["column", "row"]}
      height={["48", "16"]}
      justify="space-around"
    >
      <Flex
        align="center"
      >
        <Box>
          <Twitter />
        </Box>
        <Box
          marginLeft="2"
        >
          <Instagram />
        </Box>
      </Flex>
      <Flex
        align="center"
      >
      {
        navItems.map(({label, key}) => (
          <Box key={key}>
            <Text
              fontSize="xss"
              lineHeight="base"
              fontWeight="normal"
              marginLeft={key === 'about' ? ["0", "8"] : "6"}
            >
              {label}
            </Text>
          </Box>
        ))
      }
      </Flex>
      <Flex
        direction="column"
        justify="center"
        marginLeft={["0", "12"]}
      >
        <Text
          fontSize="xs"
          fontWeight="normal"
          margin="0"
          lineHeight="none"
          color="gray.100"
        >
          © 2020 PopOdds inc. Reserved.
        </Text>
        <Text
          fontSize="xs"
          fontWeight="normal"
          margin="0"
          lineHeight="none"
          color="gray.100"
        >
          If you or someone you know has a gambling problem and wants help, call 1-800-Gambler. You must be 21 years or older to place a bet.
        </Text>
      </Flex>
    </Flex>
  );
}

export { Footer };