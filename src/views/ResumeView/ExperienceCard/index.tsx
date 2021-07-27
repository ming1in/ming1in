import React, { useState } from 'react';
import Card from '../../../components/atoms/Card';
import Icon from '../../../components/atoms/Icon';
import { Experience } from '../../../data/experience';
import { IconTypeEnum } from '../../../types/enums/IconType';

import './styles.scss';
interface Props {
  data: Experience;
}

export default function ExperienceCard(props: Props): JSX.Element {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const startDate = data.start.format('MMM YYYY');
  const endDate = data.end ? data.end.format('MMM YYYY') : undefined;

  const date = endDate ? `${startDate} - ${endDate}` : startDate;

  return (
    <>
      <div className="ExperienceCard-circle" />

      {data.tech && (
        <div className="ExperienceCard-iconContainer">
          {data.tech.map((icon, idx) => (
            <Icon className="ExperienceCard-techIcon" key={idx} iconType={icon} />
          ))}
        </div>
      )}

      <Card className="ExperienceCard-card">
        <span className="ExperienceCard-date">{date}</span>

        <div className="ExperienceCard-header">
          <div>
            <h3 className="ExperienceCard-title">{data.title}</h3>
            <p className="ExperienceCard-company">{data.company}</p>
          </div>
          {data.body && (
            <Icon
              className="ExperienceCard-plusIcon"
              onClick={toggleIsOpen}
              iconType={isOpen ? IconTypeEnum.Minus : IconTypeEnum.Plus}
            />
          )}
        </div>

        {isOpen && (
          <>
            {data.body &&
              data.body.map((text, idx) => (
                <p className="ExperienceCard-bodyText" key={idx}>
                  - {text}
                </p>
              ))}

            {data.links && (
              <div className="ExperienceCard-linkContainer">
                <Icon iconType={IconTypeEnum.Link} className="ExperienceCard-linkIcon" />

                {data.links.map((link, idx) => (
                  <a target="_blank" rel="noreferrer" key={idx} href={link.url}>
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </Card>
    </>
  );
}
