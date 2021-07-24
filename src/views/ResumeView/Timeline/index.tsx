import React from 'react';
import { ExperienceData, Experience } from '../../../data/experience';

import './styles.scss';
import { Project, ProjectData } from '../../../data/projects';
import { Education, EducationData } from '../../../data/education';
import { TimelineType } from '../../../types/enums/Timeline';
import { TimelineData } from '../../../types/interfaces/views';
import ExperienceCard from '../ExperienceCard';
import ProjectCard from '../ProjectCard';
import EducationCard from '../EducationCard';
import PresentCard from '../PresentCard';
import Card from '../../../components/atoms/Card';

interface Props {
  filter?: TimelineType;
}

export default function Timeline(props: Props): React.ReactElement {
  const { filter } = props;

  const timeLineData = [...ExperienceData, ...ProjectData, ...EducationData]
    .filter((data) => {
      if (!filter) return data;
      else if (data.type === filter) return data;
    })
    .sort((a, b) => b.start.valueOf() - a.start.valueOf());

  const renderTimelineCard = (data: TimelineData, idx: number) => {
    switch (data.type) {
      case TimelineType.Experience:
        return <ExperienceCard key={idx} data={data as Experience} />;
      case TimelineType.Project:
        return <ProjectCard key={idx} data={data as Project} />;
      case TimelineType.Education:
        return <EducationCard key={idx} data={data as Education} />;
      default:
        return null;
    }
  };

  return (
    <div className="Timeline">
      <div className="Timeline-section">
        <PresentCard />
      </div>

      {timeLineData.map((data, idx) => (
        <div className="Timeline-section" key={idx}>
          {renderTimelineCard(data, idx)}
        </div>
      ))}
      <div className="Timeline-section">
        <div className="Timeline-circle" />

        <h3>📌 The beginning of it all</h3>
      </div>
    </div>
  );
}
