import React, { useState } from 'react';
import Card from '../../../components/atoms/Card';
import Icon from '../../../components/atoms/Icon';
import { Education } from '../../../data/education';
import { IconTypeEnum } from '../../../types/enums/IconType';

import './styles.scss';

interface Props {
  data: Education;
}

export default function EducationCard(props: Props): JSX.Element {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(data.initShowBody ?? true);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const startDate = data.start.format('MMM YYYY');
  const endDate = data.end ? data.end.format('MMM YYYY') : undefined;

  const date = endDate ? `${startDate} - ${endDate}` : startDate;

  return (
    <>
      <div className="EducationCard-circle" />

      <Card className="EducationCard-card">
        <span className="EducationCard-date">{date}</span>

        <div className="EducationCard-header">
          <div>
            <h3 className="EducationCard-title">{data.organization}</h3>
            <p className="EducationCard-company">{data.degree}</p>
          </div>
          {data.body && <Icon className="EducationCard-plusIcon" onClick={toggleIsOpen} iconType={IconTypeEnum.Plus} />}
        </div>

        {data.body &&
          isOpen &&
          data.body.map((text, idx) => (
            <p className="EducationCard-bodyText" key={idx}>
              - {text}
            </p>
          ))}
      </Card>
    </>
  );
}
