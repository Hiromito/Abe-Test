import React from 'react';

import { ReactComponent as HeaderLogo } from 'styles/headerLogo.svg';
import { ReactComponent as TrackerIcon } from 'styles/icons/tracker.svg';
import { ReactComponent as LocationIcon } from 'styles/icons/location.svg';
import { ReactComponent as UserIcon } from 'styles/icons/defaultUser.svg';
import { ReactComponent as DashIcon } from 'styles/icons/dash.svg';

import {
  Layout,
  Box,
  Flex,
  Title
} from 'emotionTheme';
import { MobileSideBarSection } from 'components/SideBar/MobileSideBar';

const icons = {
  trackerIcon: TrackerIcon,
  locationIcon: LocationIcon,
  defaultUserIcon: UserIcon
};

const navItems = [
  {
    key: 'odd',
    label: 'Odds'
  },
  {
    key: 'futures',
    label: 'Futures'
  },
  {
    key: 'bets',
    label: 'How To Bet'
  },
  {
    key: 'legalization',
    label: 'Legalization'
  },
  {
    key: 'insights',
    label: 'Insights'
  },
  {
    key: 'review',
    label: 'Reviews'
  },
  {
    key: 'deals',
    label: 'Deals'
  },
];

const iconButtons = [
  {
    key: 'tracker',
    label: 'Bet Tracker',
    icon: 'trackerIcon'
  },
  {
    key: 'location',
    label: 'New Jersey',
    icon: 'locationIcon'
  },
  {
    key: 'user',
    label: 'Abebets',
    icon: 'defaultUserIcon'
  }
];

function IconButton({label, icon}) {
  const Icon = icons[`${icon}`];
  return (
    <Flex
      alignItems="center"
      height="full"
      padding="4px 8px"
      marginLeft="2"
    >
      <Box
        display="flex"
        alignItems="center"
      >
        <Icon />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        marginLeft="3"
      >
        <Title
          fontSize="sm"
          lineHeight="taller"
          fontWeight="semibold"
        >
          {label}
        </Title>
      </Box>
    </Flex>
  );
};

function Header() {  
  const activeItem = 'bets';
  return (
    <>
      <Layout
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={["14", "16"]}
        >
          <Box
            display="flex"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <HeaderLogo />
            </Box>
            <Box
              display={["none", "flex"]}
              justifyContent="space-between"
              alignItems="center"
            >
            {
              navItems.map(({key, label}) => {
                return (
                  <Box
                    key={key}
                    marginLeft={key === 'odd' ? "10" : "6"}
                    borderBottom={ key === activeItem ? "2px solid #0C40FC" : 'none'}
                  >
                    <Title
                      color={ key === activeItem ? "primary" : "secondary"}
                      fontSize="md"
                      lineHeight="taller"
                      fontWeight="semibold"
                    >
                      {label}
                    </Title>
                  </Box>
                );
              })
            }
            <Box>

            </Box>
            </Box>
          </Box>
          <Flex
            display={["none", "flex"]}
          >
          {
            iconButtons.map(({key, label, icon}) => (
              <IconButton key={key} label={label} icon={icon} />
            ))
          }
          </Flex>
          <Box display={["block", "none"]}>
            <DashIcon />
          </Box>
        </Box>
      </Layout>
      <Box display={["block", "none"]}>
        <MobileSideBarSection />
      </Box>
    </>
  );
}

export { Header };