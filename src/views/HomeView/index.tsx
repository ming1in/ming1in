import React from 'react';
import Icon from '../../components/atoms/Icon';
import { IconTypeEnum } from '../../types/enums/IconType';

import './styles.scss';

export default function HomeView(): React.ReactElement {
  return (
    <div className="HomeView">
      <div className="HomeView-hero">
        <Icon className="HomeView-memoji" iconType={IconTypeEnum.Memoji} />

        <div className="HomeView-textContainer">
          <h2>Hi, I’m Ming 🤘🏼</h2>
          <h1>
            I build experiences, <br />
            curate products, and bring ideas to life
            <br />
            with code
          </h1>
          <h4>a Software Engineer in the New York City Area.</h4>
        </div>

        <button>Connect with me</button>
      </div>
    </div>
  );
}
