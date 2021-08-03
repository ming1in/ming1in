import React, { useState } from 'react';
import Timeline from './Timeline';
import './styles.scss';
import { TimelineType } from '../../types/enums/Timeline';
import classNames from 'classnames';
import { ExperienceData } from '../../data/experience';
import { ProjectData } from '../../data/projects';
import { EducationData } from '../../data/education';
import useMixpanel from '../../hooks/useMixpanel';
import { MixpanelEvent } from '../../types/enums/MixPanel';
import Button from '../../components/atoms/Button';
import { IconTypeEnum } from '../../types/enums/IconType';
import { ELink } from '../../types/enums/views';

export default function ResumeView(): React.ReactElement {
  const mixPanel = useMixpanel();

  const [filter, setFilter] = useState<undefined | TimelineType>(undefined);

  const onClickFilter = (e: React.MouseEvent, selectedFilter?: TimelineType) => {
    setFilter(selectedFilter);
    mixPanel.track({ event: MixpanelEvent.OnClickFilter, props: { filter: selectedFilter ?? 'all' } });
  };

  const experienceCount = ExperienceData.length,
    projectCount = ProjectData.length,
    educationCount = EducationData.length;

  const onClickPrint = () => (window.location.href = ELink.Resume);

  return (
    <div className="ResumeView">
      <h1 className="ResumeView-title">💥 Behold! My life&apos;s work</h1>

      <div className="ResumeView-filtersContainer">
        <span
          onClick={(e) => onClickFilter(e, TimelineType.Experience)}
          className={classNames('ResumeView-experienceFilter', {
            'ResumeView-selectedExperienceFilter': filter === TimelineType.Experience
          })}
        >
          {`Experiences (${experienceCount})`}
        </span>
        <span
          onClick={(e) => onClickFilter(e, TimelineType.Project)}
          className={classNames('ResumeView-projectFilter', {
            'ResumeView-selectedProjectFilter': filter === TimelineType.Project
          })}
        >
          {`Projects (${projectCount})`}
        </span>
        <span
          onClick={(e) => onClickFilter(e, TimelineType.Education)}
          className={classNames('ResumeView-educationFilter', {
            'ResumeView-selectedEducationFilter': filter === TimelineType.Education
          })}
        >
          {`Education (${educationCount})`}
        </span>
        <span
          onClick={onClickFilter}
          className={classNames('ResumeView-allFilter', { 'ResumeView-selectedAllFilter': !filter })}
        >
          All
        </span>
      </div>
      <Timeline filter={filter} />

      <div className="ResumeView-printButton">
        <Button onClick={onClickPrint} icon={IconTypeEnum.Printer}>
          Print
        </Button>
      </div>
    </div>
  );
}
