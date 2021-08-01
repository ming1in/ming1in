import React from 'react';
import Icon from '../../../components/atoms/Icon';
import { IHeatMapData } from '../../../types/interfaces/views';

import './styles.scss';

interface Props {
  data: IHeatMapData[];
}

function heatMapColorforValue(value: number) {
  return `rgba(28, 28, 30, ${1 - (100 - value) / (100 - 0)})`;
}

export default function Heatmap(props: Props): JSX.Element {
  const { data } = props;

  return (
    <div className="heatmap">
      {data.map((data, idx) => (
        <div key={idx} style={{ background: `${heatMapColorforValue(data.value)}` }}>
          <div className="heatmap-cell">
            {data.icon && <Icon iconType={data.icon} />}
            <span className="heatmap-text">{data.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
