import moment from 'moment';
import { Moment } from 'moment';
import { TimelineType } from '../types/enums/Timeline';
import { BaseTimelineData } from '../types/interfaces/views';

export interface Education extends BaseTimelineData {
  organization: string;
  location: string;
  degree: string;
  start: Moment;
  end?: Moment;
  body?: Array<string>;
}

export const EducationData: Education[] = [
  {
    organization: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    degree: 'B.S. in Computer Science',
    start: moment('Sep 2018'),
    end: moment('May 2022'),
    body: ['GPA: 3.56/4.0', 'Deans List', 'Edwin A Stevens Scholarship']
  }
].map((experience) => ({ ...experience, type: TimelineType.Education }));
