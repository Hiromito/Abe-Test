import React, { useState } from 'react';

import {
  Box,
  Flex,
  Text
} from 'emotionTheme';

import { ReactComponent as PlusIcon } from 'styles/icons/plus.svg';
import { ReactComponent as MinusIcon } from 'styles/icons/minus.svg';
import { ReactComponent as MinusBackIcon } from 'styles/icons/minusBlack.svg';

import { bars } from './sideBarData';
import { SubBar } from './SubBar';

function SideBarSection({ selected, handleChange }) {
  const [activeGroup, setActiveGroup] = useState('Betting 101');

  const handleActive = (name) => {
    setActiveGroup(name);
    handleChange(name);
  };

  return (
    <Box
      display={["none", "block"]}
      width={["2xs", "xs", "sm"]}
      height="full"
      borderRadius="0.25rem"
      padding="1rem 1.25rem"
      marginLeft={["4", "4", "11"]}
      bg="white"
    >
    {
      bars.map(({title, description, subBars}, index) => (
        <Box key={index}>
          <Flex
            padding="0.5rem 1rem"
            alignItems="center"
            onClick={() => handleActive(title)}
          >
            { activeGroup === title ?  selected === title ? <MinusIcon /> : <MinusBackIcon /> : <PlusIcon /> }
            <Box
              marginLeft="1.25rem"
            >
              <Text
                fontWeight="semibold"
                fontSize="xl"
                lineHeight="base"
                color={ selected === title ? "primary" : "secondary"}
              >
                {title}
              </Text>
            </Box>
          </Flex>
          <Box
            width="64"
            margin="8px 44px 8px 50px"
          >
            <Text
              fontSize="sm"
              fontWeight="light"
              opacity="90%"
            >
              {description}
            </Text>
          </Box>
          <Box
            margin="12px 0 12px 50px"
          >
            {
              activeGroup === title && (
                <SubBar selected={selected} subBars={subBars} handleChange={handleChange} />
              )
            }
          </Box>
        </Box>
      ))
    }
    </Box>
  );
}

export { SideBarSection };