import React, { useState } from 'react';
import Timeline from './Timeline';
import './styles.scss';
import { TimelineType } from '../../types/enums/Timeline';

export default function ResumeView(): React.ReactElement {
  const [filter, setFilter] = useState<undefined | TimelineType>(undefined);

  const onClickFilter = (e: React.MouseEvent, selectedFilter?: TimelineType) => setFilter(selectedFilter);

  return (
    <div className="ResumeView">
      <h1>Check out my past work</h1>

      <div className="ResumeView-filtersContainer">
        <span onClick={(e) => onClickFilter(e, TimelineType.Experience)} className="ResumeView-experienceFilter">
          Experiences
        </span>
        <span onClick={(e) => onClickFilter(e, TimelineType.Project)} className="ResumeView-projectFilter">
          Projects
        </span>
        <span onClick={(e) => onClickFilter(e, TimelineType.Education)} className="ResumeView-educationFilter">
          Education
        </span>
        <span onClick={onClickFilter} className="ResumeView-allFilter">
          All
        </span>
      </div>
      <Timeline filter={filter} />
    </div>
  );
}
