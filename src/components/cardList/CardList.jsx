import Container from 'components/container/Container';
import CardItem from 'components/cardItem/CardItem';

import { WrapperCards, List } from 'components/cardList/CardList.styled';

import dataCard from '../DataCard';

export const CardlList = () => {
  const userCard = dataCard;

  return (
    <Container>
      <WrapperCards>
        {userCard &&
          userCard.map(
            ({
              id,
              avatar,
              userName,
              countTweets,
              tweets,
              countFollowers,
              followers,
              index,
            }) => (
              <List key={id}>
                <CardItem
                  avatar={avatar}
                  userName={userName}
                  countTweets={countTweets}
                  tweets={tweets}
                  countFollowers={countFollowers}
                  followers={followers}
                />
              </List>
            )
          )}
      </WrapperCards>
    </Container>
  );
};
