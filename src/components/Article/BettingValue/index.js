import React from 'react';

import {
  Box,
  Flex,
  Heading,
  Paragraph,
  Button,
} from 'emotionTheme';

function BettingValueArticle() {
  return (
    <>
      <Box
        paddingLeft="8"
        paddingRight="14"
      >
        <Heading
          as="h4"
          marginTop="10"
          marginBottom="4"
        >
          How Do I Convert Sports Betting Odds Into An Implied Probability?
        </Heading>
        <Paragraph>
          Before we dive into implied probability, let's revisit a key component of the formula, that being plus and minus odds.
        </Paragraph>
        <Paragraph>
          The team expected to win any given game — i.e. the favorite — will sport minus or negative odds. For example, say the Oklahoma City Thunder moneyline odds are -120 in their game against the Golden State Warriors. This means if you bet OKC, you're risking $120 to make a $100 profit.
        </Paragraph>
        <Paragraph>
          To work out the implied probability for the Warriors-Thunder matchup, you need to plug the numbers into this equation:
        </Paragraph>
        <Paragraph
          paddingBottom="0px"
          fontWeight="bold"
        >
          (-odds / odds +100) * 100 = implied probability
        </Paragraph>
        <Paragraph>
          (And you thought you'd never need to know algebra after you graduated high school.)
        </Paragraph>
        <Paragraph>
          The first thing we'll do for our calculation is remove the minus signs, turning -120 into 120. Next, we add 100, which gives us 120 +100 = 220. We then divide the 120 by 220 and end up with 0.545. Then, we turn this into a percentage by multiplying by 100, giving us an implied probability of 54.5%. 
        </Paragraph>
        <Paragraph>
          All this is a roundabout way of telling us that the Thunder have a 54.5% chance of winning the game, as implied by the moneyline payout.  This means that if you think the Thunder has a `{">"}`54.5% chance of winning the game, you should bet the Thunder moneyline. 
        </Paragraph>
        <Paragraph>
          For odds represented with a plus symbol, the equation is slightly different, but the process is much the same...and as all Philadelphia 76ers fans know, you always Trust the Process. 
        </Paragraph>
        <Paragraph>
          Speaking of the Sixers, let’s say they’re +200 underdogs against a piping-hot Celtics squad in Boston. This means if you bet $100 and the Sixers win, you'll earn a $200 profit.
        </Paragraph>
        <Paragraph>
          As for this iteration of implied probability, we first divide 100 by (200 + 100) which gives us 100/300 or 0.33. We then multiply that number by 100 to get an implied probability percentage of 33%. Algebra-wise, it looks like this.
        </Paragraph>
        <Paragraph
          paddingBottom="0px"
          fontWeight="bold"
        >
          100 / (200 + 100) = 0.33
        </Paragraph>
        <Paragraph fontWeight="bold">
          0.33 * 100 = 33%
        </Paragraph>
      </Box>

      <Flex
        justify="center"
        paddingTop="2"
      >
        <Button width="21" height="10">CTA</Button>
      </Flex>

      <Box
        paddingLeft="8"
        paddingRight="14"
      >
        <Heading
          as="h4"
          textTransform="capitalize"
          marginTop="10"
          marginBottom="4"
          width="2xs"
        >
          How Implied Probability Can Help You Become An Advanced Sports Bettor
        </Heading>
        <Paragraph>
          Lower implied probability means a higher payout; higher implied probability means a lower payout. Your ultimate goal is to find odds for which the implied probability differs meaningfully from your assessment of the true probability.
        </Paragraph>
        <Paragraph>
          Let's go back to our Philly-Boston contest. The Sixers' 33% implied probability means they've been given a one-in-three opportunity of winning that game. If you think the true chances of Philadelphia posting a “W” are closer to 50% — or one-in-two — then hit up your sportsbook and get on the Sixers bandwagon before the odds drift.
        </Paragraph>
        <Paragraph>
          Becoming an implied probability expert won't guarantee you regular betting victories, yet it's a useful concept to have in your wagering arsenal.
        </Paragraph>
        <Paragraph>
          This process encourages you to consult multiple sportsbooks or use an odds comparison machine. Once you calculate the implied probability, you’ll want to find the odds that net you the maximum profit for whichever side you’re betting on.
        </Paragraph>
      </Box>
    </>
  );
}

export { BettingValueArticle };