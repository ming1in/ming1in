import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/atoms/Icon';
import useMixpanel from '../../../hooks/useMixpanel';
import { IconTypeEnum } from '../../../types/enums/IconType';
import { MixpanelEvent } from '../../../types/enums/MixPanel';
import { ERoute } from '../../../types/enums/Routes';
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

      <Link onClick={() => onClickLink(ERoute.Home)} to={ERoute.Home} className="Navbar-nameNav">
        - Ming Lin -
      </Link>

      <div>
        <Link onClick={() => onClickLink(ERoute.Resume)} to={ERoute.Resume} className="Navbar-navItem">
          Resume
        </Link>
        <Link onClick={() => onClickLink(ERoute.About)} to={ERoute.About} className="Navbar-navItem">
          My Story
        </Link>
      </div>
    </div>
  );
}
