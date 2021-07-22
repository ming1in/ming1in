import React from 'react';

import { IconTypeEnum } from '../../types/enums/IconType';
import { IIconProps } from '../../types/interfaces/atoms';
import EmailIcon from '../../assets/icons/email.svg';

export default function Icon(props: IIconProps): JSX.Element {
  const { iconType, ...htmlProps } = props;

  switch (iconType) {
    case IconTypeEnum.Email:
      return <img {...htmlProps} src={EmailIcon} alt="Email Icon" />;
  }
}
