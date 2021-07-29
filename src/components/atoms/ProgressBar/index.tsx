import classNames from 'classnames';
import React from 'react';

import './styles.scss';

interface Props {
  value: number;
  color?: string;
}

export default function ProgressBar(props: Props): JSX.Element {
  const color = props.color ? `ProgressBar--${props.color}` : '';

  return (
    <div className="ProgressBar">
      <div className={classNames('ProgressBar-bar', color)} style={{ width: `${props.value}%` }} />
    </div>
  );
}
