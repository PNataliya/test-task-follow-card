import styled from '@emotion/styled';

// import { AiFillGithub } from 'react-icons/ai';
// import { AiFillLinkedin } from 'react-icons/ai';

import bgCard from '../../images/bgImage-min.png';

export const ProfileCard = styled.div`
  border-radius: ${p => p.theme.radii.card};
  padding: 242px 20px 20px;
  padding-top: 154px;
  position: relative;

  background-repeat: no-repeat;
  background-image: url(${bgCard});
  background-position-x: 33px;
  background-position-y: 21px;
  background-size: 83%;

  @media screen and (min-width: 1280px) {
    padding: 238px 92px 36px;
  }
`;

export const BoxAvatar = styled.div``;

export const Avatar = styled.img`
  position: absolute;
  top: 37%;
  left: 43%;
  width: 68px;
  height: 68px;

  border-radius: ${p => p.theme.radii.img};
`;

export const Circle = styled.img`
  position: absolute;
  top: 37%;
  left: 41%;
  width: 80px;
  height: 80px;
`;

export const LineLeft = styled.img`
  position: absolute;
  top: 45%;
  left: 0%;
  width: 161px;
  height: 8px;
`;

export const LineRight = styled.img`
  position: absolute;
  top: 45%;
  left: 58%;
  width: 161px;
  height: 8px;
`;

export const BoxInfo = styled.div`
  margin-top: 10px;
`;
export const CaptionTitle = styled.h3`
  margin-bottom: 5px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;

  color: ${p => p.theme.colors.text};
`;

export const BoxTweet = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;
export const CounTweet = styled.p`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  margin-right: 10px;

  color: ${p => p.theme.colors.text};
`;

export const Tweet = styled.p`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  color: ${p => p.theme.colors.text};
`;

export const BoxFollow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 26px;
`;

export const CounFollow = styled.p`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  margin-right: 10px;

  color: ${p => p.theme.colors.text};
`;

export const Follow = styled.p`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  color: ${p => p.theme.colors.text};
`;

export const Button = styled.button`
  width: 196px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.ms};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase;
  margin: 0;
  padding: 14px 20px;
  background-color: ${p => p.theme.colors.primaryButton};
  color: ${p => p.theme.colors.textButton};
  box-shadow: ${p => p.theme.shadows.button};
  border-radius: ${p => p.theme.radii.button};
`;
