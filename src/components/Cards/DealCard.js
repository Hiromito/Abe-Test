import React from 'react';

import {
  Box,
  Title,
  Image
} from 'emotionTheme';

import { ReactComponent as Right } from 'styles/icons/right.svg';

function DealCard({ titles, image, width, height }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="full"
      height="16"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
      {
        titles.map((title, index) => (
          <Title
            key={index}
            fontWeight="600"
            fontSize="md"
            lineHeight="base"
          >{title}</Title>
        ))
      }
      </Box>
      <Box
        display="flex"
        alignItems="center"
        width=""
        justifyContent="space-between"
      >
        <Box
          display="flex"
          justifyContent="center"
          width="20"
          marginRight="3"
        >
          <Image src={image} width={width} height={height} />
        </Box>
        <Right />
      </Box>
    </Box>
  );
}

export { DealCard };