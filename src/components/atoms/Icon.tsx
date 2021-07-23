import React from 'react';

import { IconTypeEnum } from '../../types/enums/IconType';
import { IIconProps } from '../../types/interfaces/atoms';
import EmailIcon from '../../assets/icons/email.svg';
import MemojiIcon from '../../assets/icons/memoji.svg';
import GithubIcon from '../../assets/icons/github.svg';
import LinkedInIcon from '../../assets/icons/linkedin.svg';

export default function Icon(props: IIconProps): JSX.Element {
  const { iconType, ...htmlProps } = props;

  switch (iconType) {
    case IconTypeEnum.Email:
      return <img {...htmlProps} src={EmailIcon} alt="EmailIcon" />;
    case IconTypeEnum.Memoji:
      return <img {...htmlProps} src={MemojiIcon} alt="MemojiIcon" />;
    case IconTypeEnum.Github:
      return <img {...htmlProps} src={GithubIcon} alt="GithubIcon" />;
    case IconTypeEnum.LinkedIn:
      return <img {...htmlProps} src={LinkedInIcon} alt="LinkedInIcon" />;
  }
}
