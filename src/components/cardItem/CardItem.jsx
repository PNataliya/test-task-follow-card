import { useState } from 'react';
import useLocalStorage from 'components/hooks/UseLocalStorage';

import {
  ProfileCard,
  Avatar,
  CaptionTitle,
  BoxAvatar,
  Circle,
  LineLeft,
  LineRight,
  BoxInfo,
  BoxTweet,
  CounTweet,
  Tweet,
  BoxFollow,
  CounFollow,
  Follow,
  Button,
} from 'components/cardItem/CardItem.styled';

import circle from '../../images/Ellipse.png';
import line1 from '../../images/central-line.png';

export default function CardItem({
  id,
  avatar,
  userName,
  countTweets,
  tweets,
  countFollowers,
  followers,
}) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [name, setName] = useLocalStorage('name', countFollowers);
  const [button, setButton] = useLocalStorage('button', 'FOLLOW');
  const [colorButton, setColorButton] = useLocalStorage(
    'colorButton',
    'backgroundColor: #EBD8FF'
  );

  const handleClick = e => {
    if (e.target.name.includes('FOLLOW')) {
      setButtonClicked(true);
      setName(countFollowers + 1);
      setButton('FOLLOWING');
      setColorButton('#5CD3A8');

      if (buttonClicked === true) {
        setButtonClicked(false);
        setName(countFollowers);
        setButton('FOLLOW');
        setColorButton('#EBD8FF');
      }
    }
  };

  return (
    <ProfileCard>
      <BoxAvatar>
        <LineLeft src={line1} alt={line1} />
        <LineRight src={line1} alt={line1} />
        <Avatar src={avatar} alt={userName} />
        <Circle src={circle} alt={circle} />
      </BoxAvatar>

      <BoxInfo>
        <CaptionTitle>{userName}</CaptionTitle>
        <BoxTweet>
          <CounTweet>{countTweets}</CounTweet>
          <Tweet>{tweets} </Tweet>
        </BoxTweet>
        <BoxFollow>
          <CounFollow>{name.toLocaleString('en')}</CounFollow>
          <Follow>{followers} </Follow>
        </BoxFollow>
      </BoxInfo>
      <Button name={button} onClick={handleClick}>
        {button}
      </Button>
    </ProfileCard>
  );
}
