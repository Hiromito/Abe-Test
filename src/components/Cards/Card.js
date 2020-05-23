import React from 'react';

import {
  Box,
  Image,
  Text
} from 'emotionTheme';

function Card({image, description}) {
  return (
    <Box
      display="flex"
      height="24"
      width={["full", "xs"]}
      padding="4"
      border="1px"
      margin="3"
      borderColor="gray.200"
    >
      
      <Image src={image} height="16"  width="28" />
      <Box
        marginLeft="4"
        flex="1"
      >
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export { Card };