import React, { useState } from 'react';
import Card from '../../../components/atoms/Card';
import Icon from '../../../components/atoms/Icon';
import { Project } from '../../../data/projects';
import { IconTypeEnum } from '../../../types/enums/IconType';

import './styles.scss';

interface Props {
  data: Project;
}

export default function ProjectCard(props: Props): JSX.Element {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(data.initShowBody ?? true);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const startDate = data.start.format('MMM YYYY');
  const endDate = data.end ? data.end.format('MMM YYYY') : undefined;

  const date = endDate ? `${startDate} - ${endDate}` : startDate;

  return (
    <>
      <div className="ProjectCard-circle" />

      {data.tech && (
        <div className="ProjectCard-iconContainer">
          {data.tech.map((icon, idx) => (
            <Icon className="ProjectCard-techIcon" key={idx} iconType={icon} />
          ))}
        </div>
      )}

      <Card className="ProjectCard-card">
        <span className="ProjectCard-date">{date}</span>

        <div className="ProjectCard-header">
          <div>
            <h3 className="ProjectCard-title">{data.title}</h3>
          </div>
          {data.body && <Icon className="ProjectCard-plusIcon" onClick={toggleIsOpen} iconType={IconTypeEnum.Plus} />}
        </div>

        {isOpen && (
          <>
            {data.body &&
              data.body.map((text, idx) => (
                <p className="ProjectCard-bodyText" key={idx}>
                  - {text}
                </p>
              ))}

            {data.links && (
              <div className="ProjectCard-linkContainer">
                <Icon iconType={IconTypeEnum.Link} className="ProjectCard-linkIcon" />

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
