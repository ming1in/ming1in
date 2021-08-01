import classNames from 'classnames';
import React from 'react';
import { IconTypeEnum } from '../../../types/enums/IconType';
import { IButtonProps } from '../../../types/interfaces/atoms';
import Icon from '../Icon';

import './styles.scss';

export default function Button(props: IButtonProps): JSX.Element {
  const variant = props.variant ? `Button--${props.variant}` : 'Button--filled';
  const size = props.size ? `Button--${props.size}` : 'Button--medium';

  return (
    <button className={classNames(['Button', variant, size, props.className])} {...props}>
      {props.icon && <Icon iconType={IconTypeEnum.Printer} />}
      {props.children}
    </button>
  );
}
