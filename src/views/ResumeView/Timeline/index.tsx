import React, { useState } from 'react';
import { TimelineData } from '../../../data/timeline';
import Icon from '../../../components/atoms/Icon';
import { IconTypeEnum } from '../../../types/enums/IconType';

import './styles.scss';

interface TimelineCardProps {
  key: number;
  data: TimelineData;
}

function TimelineCard(props: TimelineCardProps): JSX.Element {
  const { key, data } = props;
  const [isOpen, setIsOpen] = useState(data.initShowBody ?? true);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div key={key} className="Timeline-section">
      <div className="Timeline-circle" />

      <div className="Timeline-card">
        <span className="Timeline-date">{data.start}</span>

        <div className="Timeline-header">
          <div>
            <h3 className="Timeline-title">{data.title}</h3>
            <p className="Timeline-company">{data.company}</p>
          </div>
          {data.body && <Icon className="Timeline-plusIcon" onClick={toggleIsOpen} iconType={IconTypeEnum.Plus} />}
        </div>

        {data.body &&
          isOpen &&
          data.body.map((text, idx) => (
            <p className="Timeline-bodyText" key={idx}>
              - {text}
            </p>
          ))}
      </div>
    </div>
  );
}

export default function Timeline(): React.ReactElement {
  return (
    <div className="Timeline">
      {TimelineData.map((data, idx) => (
        <TimelineCard key={idx} data={data} />
      ))}
    </div>
  );
}
