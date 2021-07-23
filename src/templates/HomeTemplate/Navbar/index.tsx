import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/atoms/Icon';
import { IconTypeEnum } from '../../../types/enums/IconType';
import { SocialUrl } from '../../../types/enums/Socials';

import './styles.scss';

export default function Navbar(): React.ReactElement {
  return (
    <div className="Navbar">
      <div className="Navbar-emailContainer">
        <Icon className="Navbar-emailIcon" iconType={IconTypeEnum.Email} />
        <a className="Navbar-navItem" href={`mailto: ${SocialUrl.Email}`}>
          minglianglin50@gmail.com
        </a>
      </div>

      <div>
        <Link to="/resume" className="Navbar-navItem">
          Resume
        </Link>
        <Link to="/about" className="Navbar-navItem">
          My Story
        </Link>
      </div>
    </div>
  );
}
