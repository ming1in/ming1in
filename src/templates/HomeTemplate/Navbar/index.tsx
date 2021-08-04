import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/atoms/Icon';
import useMixpanel from '../../../hooks/useMixpanel';
import { IconTypeEnum } from '../../../types/enums/IconType';
import { MixpanelEvent } from '../../../types/enums/MixPanel';
import { EInternalRoute } from '../../../types/enums/Routes';
import { SocialUrl } from '../../../types/enums/Socials';

import './styles.scss';

export default function Navbar(): React.ReactElement {
  const mixPanel = useMixpanel();

  const onClickLink = (route: string) => {
    mixPanel.track({ event: MixpanelEvent.OnViewRoute, props: { route } });
  };

  return (
    <div className="Navbar">
      <div className="Navbar-emailContainer">
        <Icon className="Navbar-emailIcon" iconType={IconTypeEnum.Email} />
        <a className="Navbar-navItem" href={`mailto: ${SocialUrl.Email}`}>
          minglianglin50@gmail.com
        </a>
      </div>

      <Link onClick={() => onClickLink(EInternalRoute.Home)} to={EInternalRoute.Home} className="Navbar-nameNav">
        - Ming Lin -
      </Link>

      <div>
        <Link onClick={() => onClickLink(EInternalRoute.Resume)} to={EInternalRoute.Resume} className="Navbar-navItem">
          Resume
        </Link>
        <Link onClick={() => onClickLink(EInternalRoute.About)} to={EInternalRoute.About} className="Navbar-navItem">
          My Story
        </Link>
      </div>
    </div>
  );
}
