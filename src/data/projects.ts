import moment from 'moment';
import { Moment } from 'moment';
import { TimelineType } from '../types/enums/Timeline';
import { BaseTimelineData } from '../types/interfaces/views';

export interface Project extends BaseTimelineData {
  title: string;
  start: Moment;
}

export const ProjectData: Project[] = [
  {
    title: 'Gedcom(Genealogy Data) Parser',
    start: moment('Oct 2020')
  },
  {
    title: 'Zillow Zestimate Challenge',
    start: moment('Apr 2021')
  },
  {
    title: 'Jim Fitness Web App',
    start: moment('May 2021')
  }
].map((project) => ({ ...project, type: TimelineType.Project }));
