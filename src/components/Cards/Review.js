import React from 'react';

import {
  Box,
  Image,
  Heading,
  Title
} from 'emotionTheme';

function Review({image, width, height, rating}) {
  return (
    <Box
      display="flex"
      width={["32", "34"]}
      height="26"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      border="1px"
      borderColor="gray.200"
      margin={["2", "4"]}
      padding="4px 0 10px 0"
    >
      <Box
        width="22"
        height="11"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={image} width={width} height={height} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h5">{rating}</Heading>
        <Box>
          <Title fontSize="sm" lineHeight="none" >Overall Score</Title>
        </Box>
      </Box>
    </Box>
  );
}

export { Review };