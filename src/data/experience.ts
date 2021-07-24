import moment from 'moment';
import { TimelineType } from '../types/enums/Timeline';
import { BaseTimelineData } from '../types/interfaces/views';

export interface Experience extends BaseTimelineData {
  title: string;
  company: string;
}

export const ExperienceData: Experience[] = [
  {
    start: moment('May 2021'),
    end: moment('September 2021'),
    title: 'Software Engineering Intern',
    company: 'Wellsheet',
    body: [
      'Contributed and reviewed React-Rails code for frontend, backend, and infrastructure components.',
      'Refactored the slowest segments of the app with optimizations that improved network calls by 50% using batch queries and frontend pagination.'
    ]
  },
  {
    start: moment('Dec 2019'),
    company: 'Stache Solutions',
    title: 'Founder & Software Engineer',
    body: [
      'Consulted clients on viable software solutions, business strategy, and design to bring ideas to life.',
      'Spearheaded a collaborative development workflow with a team of 4 cross-functional engineers by implementing Scrum methodologies to consistently execute tasks in a backlog.'
    ]
  },
  {
    start: moment('May 2020'),
    end: moment('May 2021'),
    title: 'Full Stack Software Engineer',
    company: 'Skinblu',
    body: [
      'Integrated Firebase cloud functions to provide tailored data to support the frontend and automate backend tasks.',
      'Created backend testing framework using Jest and locally emulated Firestore database.',
      'Built multi-step continuous appointment booking, messaging, payment, and push notification features with Node.js/React.'
    ]
  },
  {
    start: moment('Jan 2021'),
    end: moment('Jun 2021'),
    title: 'Software Engineer',
    company: 'Develop For Good'
  },
  {
    start: moment('Jan 2021'),
    end: moment('Jun 2021'),
    title: 'Software Engineer',
    company: "Akron's Children's Hospital",
    body: [
      'Voted team lead amongst 6 engineers to develop a multi-page web app with React following a strict HIPAA compliant product requirement.',
      'Led and shipped a suite of features - dynamic timeline, genetic medical risk calculator, and interactive glossary.'
    ]
  },
  {
    start: moment('May 2019'),
    end: moment('Jan 2020'),
    title: 'Quality Engineer Intern',
    company: 'Zimmer Biomet',
    initShowBody: false,
    body: [
      'Coordinated and managed with the quality team for the management of quality operations within the foundry.',
      "Responsibilities included creating new templates, updating and revising work instructions, SOP's, QSR’s, and other documents as a part of continuous improvement and change control system, creating Quality Alerts, and presenting monthly reports to the engineering team. Written various technical and analytical protocols/reports/deviation/memos.",
      'Assure customer compliance to purchase orders, contract, and product specifications meet the Internal Quality Management System and industry standards (ISO 9001, AS9100, ANSI-J-001, IPC-A-610E).',
      'Responsible for processing Return Merchandise Authorization(RMA), responding to customer non-conformances, and product complaints by performing root cause analysis and implementing Corrective and Preventive Action (CAPA).',
      'Assisting Quality Manager in Gage R&R and Process Capability study to eliminate process variations acquired strong organizational and multi-tasking skills.',
      'Created monthly and weekly Metrics for Quality Department for the Transformation Wall.'
    ]
  },
  {
    start: moment('May 2019'),
    end: moment('Jan 2020'),
    title: 'Engineering Graphics Teaching Assistant',
    company: 'Stevens Institute of Technology',
    body: [
      'Taught the foundations of 3D modeling and spatial skills by utilizing Solidworks tools, assemblies, and drawings.',
      'Educated students on how CAD drawing are to be structured in such a way it can be utilized to express creative design ideas.'
    ]
  },
  {
    start: moment('May 2019'),
    end: moment('Jan 2020'),
    title: 'Research Assistant',
    company: 'Stevens Institute of Technology',
    body: [
      'Created a structured light 3D scanner that constructs 3D images from processing data that is taken from the camera and projector.',
      'Utilized MATLAB toolboxes such as image processing and computer vision to process data and calibrate the camera and project to detect real-world dimensions.'
    ]
  }
].map((experience) => ({ ...experience, type: TimelineType.Experience }));
