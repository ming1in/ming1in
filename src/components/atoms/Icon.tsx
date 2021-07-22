import React from 'react';

import { IconTypeEnum } from '../../types/enums/IconType';
import { IIconProps } from '../../types/interfaces/atoms';
import EmailIcon from '../../assets/icons/email.svg';
import MemojiIcon from '../../assets/icons/memoji.svg';

export default function Icon(props: IIconProps): JSX.Element {
  const { iconType, ...htmlProps } = props;

  switch (iconType) {
    case IconTypeEnum.Email:
      return <img {...htmlProps} src={EmailIcon} alt="Email Icon" />;
    case IconTypeEnum.Memoji:
      return <img {...htmlProps} src={MemojiIcon} alt="Email Icon" />;
  }
}
