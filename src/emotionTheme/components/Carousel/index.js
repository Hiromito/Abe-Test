import React from "react";
import { Flex } from "../Flex";
import { Box } from "../Box";

import { ReactComponent as Right } from 'styles/icons/carouselRight.svg';
import { ReactComponent as Left } from 'styles/icons/carouselLeft.svg';

const Carousel = ({ children, ...props }) => {
  
  return (
    <Flex
      align="center"
    >
      <Box
        display={["flex", "none"]}
        width="5"
        height="12"
        alignItems="center"
        justifyContent="center"
        bg="gray.200"
        borderRadius="0.25rem 0 0 0.25rem"
      >
        <Left />
      </Box>
      <Box
        display="flex"
        flex="1"
        paddingLeft="2"
        paddingRight="2"
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        {children}
      </Box>
      <Box 
        display={["flex", "none"]}
        width="5"
        height="12"
        alignItems="center"
        justifyContent="center"
        borderRadius="0.25rem 0 0 0.25rem"
        bg="gray.200"
      >
        <Right />
      </Box>
    </Flex>
  );
};

export { Carousel };