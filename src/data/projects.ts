import moment from 'moment';
import { Moment } from 'moment';
import { IconTypeEnum } from '../types/enums/IconType';
import { TimelineType } from '../types/enums/Timeline';
import { BaseTimelineData } from '../types/interfaces/views';

export interface Project extends BaseTimelineData {
  title: string;
  start: Moment;
}

export const ProjectData: Project[] = [
  {
    title: 'Gedcom(Genealogy Data) Parser',
    start: moment('October 2020'),
    body: [
      'Engineered a scalable parsing engine that mapped GEDCOM to data types and provided a foundation for 57 features built by 8 team members.',
      'Developed a unit testing framework and standardized patterns for 180 testing code paths.'
    ],
    tech: [IconTypeEnum.Python],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/ming1in/gedcom-parser'
      }
    ]
  },
  {
    title: 'Zillow Zestimate Challenge',
    start: moment('April 2021'),
    body: [
      'Evaluated linear regression, decision tree, random forest, XGBoost, and ensemble models with a 67% accuracy and 0.16 error margin.',
      'Condensed an initial 53 features to 27 features with feature engineering to improve the efficiency of training models. ',
      'Mapped concepts across 3 large datasets and applied exploratory data analysis techniques to identify hidden relations.'
    ],
    tech: [IconTypeEnum.Python],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/ming1in/Stevens-IT/blob/master/CS_559/projects/03_zillow/project_3.ipynb'
      }
    ]
  },
  {
    title: 'Jim Fitness Web App',
    start: moment('May 2021'),
    body: [
      'Designed end-to-end web application and scalable backend infrastructure using Typescript.',
      'Consolidated tasks into user stories, facilitated context sharing and managed a team of 4 engineers.'
    ],
    tech: [IconTypeEnum.React, IconTypeEnum.MongoDb, IconTypeEnum.Typescript],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/ming1in/jim-app'
      }
    ]
  },
  {
    title: '‘PLaF’ Custom Programming Language',
    start: moment('February 2021'),
    body: [
      'Designed a programming language from scratch to explore and apply foundational concepts such as abstract syntax trees, lexers, parsers, and type-checking for functional, imperative, or object-oriented languages.'
    ],
    tech: [IconTypeEnum.Ocaml],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/ming1in/Stevens-IT/tree/master/CS_496/interpreter'
      }
    ]
  },
  {
    title: 'Fulament eCommerce Website',
    start: moment('Jan 2020'),
    body: [
      'Designed a product-centric UI focused on key components and functionality of each product and communicated ideas using mockups.',
      'Built responsive and interactive web pages with scroll-to-play Lottie animations, call-to-actions, and a showcase of product specifications.'
    ],
    tech: [IconTypeEnum.Javascript, IconTypeEnum.Html, IconTypeEnum.Css]
  }
].map((project) => ({ ...project, type: TimelineType.Project }));
