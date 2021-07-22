import React, { PropsWithChildren } from 'react';

import Icon from '../../components/atoms/Icon';
import { IconTypeEnum } from '../../types/enums/IconType';
import './styles.scss';

export default function NavLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="NavLayout">
      <div className="NavLayout-topBar">
        <Icon iconType={IconTypeEnum.Email} />
        <h1>minglianglin50@gmail.com</h1>
      </div>
      <div className="NavLayout-wrapper">{children}</div>
    </div>
  );
}
