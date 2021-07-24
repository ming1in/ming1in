import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import './style.scss';

export default function Card(props: PropsWithChildren<any>): React.ReactElement<HTMLDivElement> {
  return <div className={classNames('Card', props.className)}>{props.children}</div>;
}
