import React from 'react';

import {
  Box,
  Flex,
  Heading,
  Link,
  Paragraph,
  Button,
} from 'emotionTheme';

function BettingArticle() {
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
          Why Do People Bet On Sports?
        </Heading>
        <Paragraph>
          Betting makes watching sports more exciting, gives you something new to debate with friends and lets you prove your sports-brain superiority to the world.
        </Paragraph>
        <Paragraph>
          In a 2019 interview on NPR's Fresh Air, actor/comedian Adam Sandler described the sheer excitement of sports betting to host Terry Gross.
        </Paragraph>
        <Paragraph>
          "When you bet on a game, [and] I do bet sometimes," Sandler said, "you watch so close when you have money on a game, and it means something to you. [But] it's not only the money. You made this decision in your head. You told everyone on the planet, this is going to happen."
        </Paragraph>
        <Paragraph>
          Sandler continued, "So you're watching the game with a different energy. And honest to God, when you make a bet on something and the game starts at 7:05, your body is shaking at two in the afternoon going, it's coming. It's coming. When you get to that actual game, there is so much excitement, you can't contain it."
        </Paragraph>
        <Paragraph>
          Sounds awesome, right?
        </Paragraph>
        <Paragraph>
          Well, it is.
        </Paragraph>
        <Paragraph>
          As we get ready to dive into the world of wagering, it's critical to understand the three basic types of bets you'll encounter in the sports betting world: moneyline, point spread (often just referred to as a "spread" or "spread betting") and total (sometimes called the over/under).
        </Paragraph>
        <Paragraph>
          Once you master the three main bet types, you'll be one step closer to becoming a sports betting samurai, armed with the knowledge you need to take on the competition.
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
        >
          What Is A Moneyline?
        </Heading>
        <Paragraph>
          When you make a moneyline bet (some spell it "money line"), you're making an outright call on which team will win in a head-to-head contest (except in the rare case of European Football, in which you can also bet on a tie). Betting terminology can be confusing, so it may be helpful to remember that in a moneyline bet, you're putting your money on the line in anticipation of your chosen team winning the game.
        </Paragraph>
        <Paragraph>
          While determining the outcome of a moneyline bet is extremely straightforward - you win the bet if your chosen team wins - moneyline odds, or payouts, require some further explanation.  Check out our detailed explanation of moneyline bets <Link>here to learn more</Link>.
        </Paragraph>
      </Box>
      <Box
        paddingLeft="8"
        paddingRight="14"
      >
        <Heading
          as="h4"
          textTransform="capitalize"
          marginTop="4"
          marginBottom="4"
        >
          How Do I Read A Point Spread?
        </Heading>
        <Paragraph>
          A great equalizer, point spreads add even more intrigue to the betting proceedings, often turning a lopsided game into a thrill ride. If you're familiar with golf handicaps, this is a similar concept. The spread aims to level out the playing field by adding or subtracting points from a team's actual score in order to determine their score for betting purposes.  When you look at a spread bet, you’ll see a plus or minus with a number next to it - the spread - alongside the “price” of the bet - typically 100 to 110.  Simply take the actual score in the game and add or subtract the spread (depending on whether the number is positive or negative) in order to arrive at the game’s score for betting purposes.  Whichever team has the highest spread-adjusted score wins the game for the purposes of the bet. <Link>Click here</Link> to learn more about spread bets.
        </Paragraph>
      </Box>
      <Box
        paddingLeft="8"
        paddingRight="14"
      >
        <Heading
          as="h4"
          textTransform="capitalize"
          marginTop="4"
          marginBottom="4"
        >
          What Is An Over/Under Bet?
        </Heading>
        <Paragraph>
          An over/under bet is a wager on the total amounts scored by both teams combined.  If the over/under on an NBA game is 200, for example, and you bet the over, you win if the score of both teams added together is greater than 200.  If you bet the under, you win if the combined scores sum to less than 200.
        </Paragraph>
      </Box>
      <Box
        paddingLeft="8"
        paddingRight="14"
      >
        <Heading
          as="h4"
          textTransform="capitalize"
          marginTop="4"
          marginBottom="4"
        >
          What Is A Total Bet?
        </Heading>
        <Paragraph>
          A total is another term for an over/under bet since you’re betting on the total score of the game.
        </Paragraph>
      </Box>
      <Box
        paddingLeft="8"
        paddingRight="14"
      >
        <Heading
          as="h4"
          textTransform="capitalize"
          marginTop="4"
          marginBottom="4"
        >
          What Is A Parlay?
        </Heading>
        <Paragraph>
          A parlay is a single wager with multiple bets, all of which must be fulfilled to win. For instance, your parlay from a Houston Rockets/San Antonio Spurs game might include the Spurs winning the tipoff, then the Rockets leading at halftime, then James Harden scoring more than 25 points. While parlays typically have large payouts, they're also inherently lower probability bets given the math behind <Link>conditional probability</Link>.
        </Paragraph>
      </Box>
      <Box
        paddingLeft="8"
        paddingRight="14"
      >
        <Heading
          as="h4"
          textTransform="capitalize"
          marginTop="4"
          marginBottom="4"
        >
          How Do I Learn About Advanced Betting Strategies?
        </Heading>
        <Paragraph>
          In addition to the how to bet tutorials above, you can also delve into more complex betting concepts like <Link>implied probability</Link>, synthetic yield and viewing sports betting as market. 
        </Paragraph>
      </Box>
      <Box
        paddingLeft="8"
        paddingRight="14"
      >
        <Heading
          as="h4"
          textTransform="capitalize"
          marginTop="4"
          marginBottom="4"
        >
          How Can I Suggest A Sports Betting Topic For Abe To Cover?
        </Heading>
        <Paragraph>
          Shoot an e-mail to <Link>crew@abebets.com</Link> with any questions, suggestions or concerns, and we’ll make sure to address them.  
        </Paragraph>
      </Box>
    </>
  );
}

export { BettingArticle };