import React from 'react';

import {
  Box,
  Text
} from 'emotionTheme';

function SubBar({selected, subBars, handleChange}) {
  return (
    <Box width={["full", "64"]}>
    {
      subBars.map((title, index) => (
        <Box
          key={index}
          onClick={() => handleChange(title)}
          paddingTop="3"
          paddingBottom="3"
        >
          <Text
            fontSize="md"
            fontWeight="normal"
            lineHeight="base"
            color={ selected === title ? "primary" : "secondary"}
          >
            {title}
          </Text>
        </Box>
      ))
    }
    </Box>
  );
}

export { SubBar };