import classNames from 'classnames';
import React from 'react';
import { IButtonProps } from '../../../types/interfaces/atoms';

import './styles.scss';

export default function Button(props: IButtonProps): JSX.Element {
  const variant = props.variant ? `Button--${props.variant}` : 'Button--filled';
  const size = props.size ? `Button--${props.size}` : 'Button--medium';

  return (
    <button className={classNames(['Button', variant, size, props.className])} {...props}>
      {props.children}
    </button>
  );
}
