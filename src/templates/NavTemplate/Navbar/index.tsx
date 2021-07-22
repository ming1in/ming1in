import React from 'react';
import Icon from '../../../components/atoms/Icon';
import { IconTypeEnum } from '../../../types/enums/IconType';

import './styles.scss';

export default function Navbar(): React.ReactElement {
  return (
    <div className="Navbar">
      <div className="Navbar-emailContainer">
        <Icon className="Navbar-emailIcon" iconType={IconTypeEnum.Email} />
        <span>minglianglin50@gmail.com</span>
      </div>

      <div className="Navbar-navItemContainer">
        <span>Experiences</span>
        <span>Projects</span>
        <span>My Story</span>
      </div>
    </div>
  );
}
