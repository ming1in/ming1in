import React from 'react';
import Icon from '../../components/atoms/Icon';
import { IconTypeEnum } from '../../types/enums/IconType';

import './styles.scss';

export default function HomeView(): React.ReactElement {
  return (
    <div className="HomeView">
      <div className="HomeView-hero">
        <Icon className="HomeView-memoji" iconType={IconTypeEnum.Memoji} />
        <h2>Hi, I’m Ming 🤘🏼</h2>
        <h1>I love building ideas and code is my favorite tool</h1>
        <h4>a Software Engineer in the New York City Area.</h4>
      </div>

      <div className="HomeView-sectionTwo">
        <h1>Section Two</h1>
      </div>
    </div>
  );
}
