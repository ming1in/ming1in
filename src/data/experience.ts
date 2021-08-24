import moment from 'moment';
import { IconTypeEnum } from '../types/enums/IconType';
import { TimelineType } from '../types/enums/Timeline';
import { BaseTimelineData } from '../types/interfaces/views';

export interface Experience extends BaseTimelineData {
  title: string;
  company: string;
}

export const ExperienceData: Experience[] = [
  {
    start: moment('May 1 2021'),
    end: moment('Aug 1 2021'),
    title: 'Software Engineering Intern',
    company: 'Wellsheet',
    body: [
      'Contributed and reviewed React/Ruby on Rails code for frontend, backend, and infrastructure components.',
      'Refactored the slowest segments of the app with optimizations that improved API requests by ~50% using batch queries and pagination.'
    ],
    tech: [IconTypeEnum.Typescript, IconTypeEnum.React, IconTypeEnum.Ruby, IconTypeEnum.Rails, IconTypeEnum.Postgresql]
  },
  {
    start: moment('Dec 1 2019'),
    end: moment('May 1 2021'),
    company: 'Stache Solutions',
    title: 'Founder & Software Engineer',
    body: [
      'Consulted clients on viable software solutions, business strategy, and design to bring ideas to life.',
      'Spearheaded a collaborative development workflow with a team of 4 cross-functional engineers by implementing Scrum methodologies to consistently execute tasks in a backlog.'
    ],
    tech: [IconTypeEnum.Javascript, IconTypeEnum.Html, IconTypeEnum.Css],
    links: [
      {
        title: 'Skinblu',
        url: 'https://www.stachesolutions.com/'
      }
    ]
  },
  {
    start: moment('May 1 2020'),
    end: moment('May 1 2021'),
    title: 'Full Stack Software Engineer',
    company: 'Skinblu',
    body: [
      'Integrated Firebase cloud functions to provide tailored data to support the frontend and automate backend tasks.',
      'Created backend testing framework using Jest and locally emulated Firestore database.',
      'Built multi-step continuous appointment booking, messaging, payment, and push notification features with Node.js/React.'
    ],
    tech: [IconTypeEnum.React, IconTypeEnum.Javascript, IconTypeEnum.Firebase]
  },
  {
    start: moment('Jan 1 2021'),
    end: moment('Jun 1 2021'),
    title: 'Software Engineer',
    company: 'Develop For Good',
    tech: [IconTypeEnum.React, IconTypeEnum.Typescript]
  },
  {
    start: moment('Jan 1 2021'),
    end: moment('Jun 1 2021'),
    title: 'Front-End Software Engineer',
    company: "Akron's Children's Hospital",
    body: [
      'Voted team lead amongst 6 engineers to develop a multi-page web app with React following a strict HIPAA compliant product requirement.',
      'Led and shipped a suite of features - dynamic treatment timeline, genetic medical risk calculator, and interactive glossary.'
    ],
    tech: [IconTypeEnum.React, IconTypeEnum.Typescript],
    links: [
      {
        title: 'Case Study',
        url: 'https://firebasestorage.googleapis.com/v0/b/storage-8999c.appspot.com/o/personal-website%2Fdfg-case-study.pdf?alt=media&token=dad22dd2-b79b-4c79-83ab-56fbbc1a4283'
      }
    ]
  },
  {
    start: moment('May 1 2019'),
    end: moment('Jan 1 2020'),
    title: 'Quality Engineer Intern',
    company: 'Zimmer Biomet',
    initShowBody: false,
    body: [
      'Coordinated and managed with the quality team for the management of quality operations within the foundry.',
      'Responsibilities included creating new templates, updating and revising work instructions, SOPs, QSRs, and other documents as a part of continuous improvement and change control system, creating Quality Alerts, and presenting monthly reports to the engineering team. Written various technical and analytical protocols/reports/deviation/memos.',
      'Assure customer compliance to purchase orders, contract, and product specifications meet the Internal Quality Management System and industry standards (ISO 9001, AS9100, ANSI-J-001, IPC-A-610E).',
      'Responsible for processing Return Merchandise Authorization(RMA), responding to customer non-conformances, and product complaints by performing root cause analysis and implementing Corrective and Preventive Action (CAPA).',
      'Assisting Quality Manager in Gage R&R and Process Capability study to eliminate process variations acquired strong organizational and multi-tasking skills.',
      'Created monthly and weekly Metrics for Quality Department for the Transformation Wall.'
    ]
  },
  {
    start: moment('August 1 2019'),
    end: moment('December 1 2019'),
    title: 'Engineering Graphics Teaching Assistant',
    company: 'Stevens Institute of Technology',
    body: [
      'Taught the foundations of 3D modeling and spatial skills by utilizing Solidworks tools, assemblies, and drawings.',
      'Educated students on how CAD drawings are to be structured in such a way it can be utilized to express creative design ideas.'
    ]
  },
  {
    start: moment('Jan 1 2019'),
    end: moment('May 1 2019'),
    title: 'Research Lab Assistant',
    company: 'Stevens Institute of Technology',
    body: [
      'Created a structured light 3D scanner that constructs 3D images from processing data that is taken from the camera and projector.',
      'Utilized MATLAB toolboxes such as image processing and computer vision to process data and calibrate the camera and project to detect real-world dimensions.'
    ]
  }
].map((experience) => ({ ...experience, type: TimelineType.Experience }));
