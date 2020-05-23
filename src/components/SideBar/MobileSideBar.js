import React, { useState } from 'react';

import {
  Box,
  Flex,
  Text
} from 'emotionTheme';

import { bars } from './sideBarData';
import { ReactComponent as CloseIcon } from 'styles/icons/close.svg';
import { SubBar } from './SubBar';

function MobileSideBarSection() {
  const [activeBar, setActiveBar] = useState('');

  const bar = bars.find(function(element) {
    return element.title === activeBar;
  });

  const handleChange = () => {
    setActiveBar('');
  };
  
  return (
    <Box>
      <Flex
        height="10"
        bg="gray.50"
      >
        <Flex
          align="center"
          justify="center"
          border="1px"
          borderColor="gray.200"
          width="55%"
          onClick={() => setActiveBar("Betting 101")}
          bg = {activeBar === "Betting 101" ? "white" : "none"}
        >
          <Text
            fontWeight="semibold"
            lineHeight="base"
            color={activeBar === "Betting 101" ? "primary" : "secondary"}
          >
            Betting 101
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="center"
          border="1px"
          borderColor="gray.200"
          width="100%"
          onClick={() => setActiveBar("Advanced Betting Concepts")}
          bg = {activeBar === "Advanced Betting Concepts" ? "white" : "none"}
        >
          <Text
            fontWeight="semibold"
            lineHeight="base"
            color={activeBar === "Advanced Betting Concepts" ? "primary" : "secondary"}
          >
            Advanced Betting Concepts
          </Text>
        </Flex>
      </Flex>
      {
        activeBar !== '' && (
          <Box
            position="fixed"
            top="24"
            height="calc(100vh - 6rem)"
            bg="rgba(0, 0, 0, 0.3)"
            width="100%"
          >
            <Box
              background="#FFF"
            >
              <Box
                display="flex"
                bg="gray.200"
                paddingLeft="6"
                width="full"
              >
                <Flex
                  align="center"
                  flex="1"
                >
                  <Text marginRight="auto">{bar.description}</Text>
                </Flex>
                <Flex
                  align="center"
                  justify="center"
                  width="16"
                  height="16"
                >
                  <CloseIcon onClick={() => setActiveBar('')} />
                </Flex>
              </Box>
              <Box
                paddingLeft="6"
                paddingRight="6"
              >
                <SubBar selected={activeBar} subBars={bar.subBars} handleChange={handleChange} />
              </Box>
            </Box>
          </Box>
        )
      }
    </Box>
  );
};

export { MobileSideBarSection };