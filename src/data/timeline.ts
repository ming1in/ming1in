export interface TimelineData {
  start: string;
  end: string;
  title: string;
  company: string;
  initShowBody?: boolean;
  body?: Array<string>;
}

export const TimelineData: TimelineData[] = [
  {
    start: 'May 2021',
    end: 'September 2021',
    title: 'Software Engineering Intern',
    company: 'Wellsheet',
    body: [
      'Contributed and reviewed React-Rails code for frontend, backend, and infrastructure components.',
      'Refactored the slowest segments of the app with optimizations that improved network calls by 50% using batch queries and frontend pagination.'
    ]
  },
  {
    start: 'May 2020',
    end: 'May 2021',
    title: 'Full Stack Software Engineer',
    company: 'Skinblu',
    body: [
      'Integrated Firebase cloud functions to provide tailored data to support the frontend and automate backend tasks.',
      'Created backend testing framework using Jest and locally emulated Firestore database.',
      'Built multi-step continuous appointment booking, messaging, payment, and push notification features with Node.js/React.'
    ]
  },
  {
    start: 'May 2021',
    end: 'September 2021',
    title: 'Software Engineer',
    company: 'Develop For Good'
  },
  {
    start: 'May 2021',
    end: 'September 2021',
    title: 'Software Engineer',
    company: "Akron's Children's Hospital",
    body: [
      'Voted team lead amongst 6 engineers to develop a multi-page web app with React following a strict HIPAA compliant product requirement.',
      'Led and shipped a suite of features - dynamic timeline, genetic medical risk calculator, and interactive glossary.'
    ]
  },
  {
    start: 'May 2019',
    end: 'Jan 2020',
    title: 'Quality Engineer Intern',
    company: 'Zimmer Biomet',
    initShowBody: false
  },
  {
    start: 'May 2019',
    end: 'Jan 2020',
    title: 'Engineering Graphics Teaching Assistant',
    company: 'Stevens Institute of Technology'
  },
  {
    start: 'May 2019',
    end: 'Jan 2020',
    title: 'Research Assistant',
    company: 'Stevens Institute of Technology'
  }
];
