import { Moment } from 'moment';
import { Education } from '../../data/education';
import { Experience } from '../../data/experience';
import { Project } from '../../data/projects';
import { IconTypeEnum } from '../enums/IconType';
import { TimelineType } from '../enums/Timeline';

interface ResumeLinks {
  title: string;
  url: string;
}

export interface BaseTimelineData {
  type: TimelineType;
  initShowBody?: boolean;
  body?: Array<string>;
  start: Moment;
  end?: Moment;
  tech?: Array<IconTypeEnum>;
  links?: Array<ResumeLinks>;
}

export type TimelineData = Experience | Project | Education;
