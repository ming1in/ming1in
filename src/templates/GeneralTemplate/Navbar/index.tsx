import React from 'react';
import { Link } from 'react-router-dom';
import useMixpanel from '../../../hooks/useMixpanel';
import { MixpanelEvent } from '../../../types/enums/MixPanel';
import { EInternalRoute } from '../../../types/enums/Routes';

import './styles.scss';

export default function Navbar(): React.ReactElement {
  const mixPanel = useMixpanel();

  const onClickLink = (route: string) => {
    mixPanel.track({ event: MixpanelEvent.OnViewRoute, props: { route } });
  };

  return (
    <div className="Navbar">
      <Link
        onClick={() => onClickLink(EInternalRoute.Home)}
        to={EInternalRoute.Home}
        className="Navbar-leftNavItem --left"
      >
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
