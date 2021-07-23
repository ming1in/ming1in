import React, { PropsWithChildren } from 'react';
import Icon from '../../components/atoms/Icon';
import { IconTypeEnum } from '../../types/enums/IconType';
import { SocialUrl } from '../../types/enums/Socials';

import Navbar from './Navbar';
import './styles.scss';

export default function NavTemplate({ children }: PropsWithChildren<unknown>): React.ReactElement {
  return (
    <div className="NavTemplate">
      <div className="container">
        <Navbar />
        <div className="NavTemplate-wrapper">{children}</div>
        <div className="NavTemplate-socialContainer">
          <a href={SocialUrl.Github} target="_blank" rel="noreferrer">
            <Icon className="NavTemplate-socialIcon" iconType={IconTypeEnum.Github} />
          </a>
          <a href={SocialUrl.LinkedIn} target="_blank" rel="noreferrer">
            <Icon className="NavTemplate-socialIcon" iconType={IconTypeEnum.LinkedIn} />
          </a>
        </div>
      </div>
    </div>
  );
}
