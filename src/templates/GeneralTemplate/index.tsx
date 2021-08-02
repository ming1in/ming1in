import React, { PropsWithChildren } from 'react';
import Icon from '../../components/atoms/Icon';
import { IconTypeEnum } from '../../types/enums/IconType';
import { SocialUrl } from '../../types/enums/Socials';

import Navbar from './Navbar';
import './styles.scss';

export default function NavTemplate({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="GenerallTemplate">
      <div className="container">
        <Navbar />
        <div className="GenerallTemplate-wrapper">{children}</div>
        <div className="GenerallTemplate-socialContainer">
          <a href={SocialUrl.Github} target="_blank" rel="noreferrer">
            <Icon className="GenerallTemplate-socialIcon" iconType={IconTypeEnum.Github} />
          </a>
          <a href={SocialUrl.LinkedIn} target="_blank" rel="noreferrer">
            <Icon className="GenerallTemplate-socialIcon" iconType={IconTypeEnum.LinkedIn} />
          </a>
        </div>
      </div>
    </div>
  );
}
