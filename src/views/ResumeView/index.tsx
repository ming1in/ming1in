import React, { useState } from 'react';
import Timeline from './Timeline';
import './styles.scss';
import { TimelineType } from '../../types/enums/Timeline';
import classNames from 'classnames';

export default function ResumeView(): React.ReactElement {
  const [filter, setFilter] = useState<undefined | TimelineType>(undefined);

  const onClickFilter = (e: React.MouseEvent, selectedFilter?: TimelineType) => setFilter(selectedFilter);

  return (
    <div className="ResumeView">
      <h1>Check out my past work</h1>

      <div className="ResumeView-filtersContainer">
        <span
          onClick={(e) => onClickFilter(e, TimelineType.Experience)}
          className={classNames('ResumeView-experienceFilter', {
            '-selectedExperienceFilter': filter === TimelineType.Experience
          })}
        >
          Experiences
        </span>
        <span
          onClick={(e) => onClickFilter(e, TimelineType.Project)}
          className={classNames('ResumeView-projectFilter', {
            '-selectedProjectFilter': filter === TimelineType.Project
          })}
        >
          Projects
        </span>
        <span
          onClick={(e) => onClickFilter(e, TimelineType.Education)}
          className={classNames('ResumeView-educationFilter', {
            '-selectedEducationFilter': filter === TimelineType.Education
          })}
        >
          Education
        </span>
        <span onClick={onClickFilter} className={classNames('ResumeView-allFilter', { '-selectedAllFilter': !filter })}>
          All
        </span>
      </div>
      <Timeline filter={filter} />
    </div>
  );
}
