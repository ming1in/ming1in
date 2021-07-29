import React from 'react';
import ProgressBar from '../../../components/atoms/ProgressBar';

import './Programming.scss';

const LanguagesData = [
  {
    name: 'Javascript/Typescript',
    progress: 95
  },
  {
    name: 'Python',
    progress: 90
  },
  {
    name: 'HTML/CSS',
    progress: 90
  },
  {
    name: 'Ruby',
    progress: 65
  },
  {
    name: 'C/C++',
    progress: 55
  },
  {
    name: 'Java',
    progress: 55
  },
  {
    name: 'Ocaml',
    progress: 50
  }
];

export default function Programming(): JSX.Element {
  return (
    <div className="Programming">
      {LanguagesData.map((language, index) => (
        <>
          <p className="Programming-language" key={index}>
            {language.name}
          </p>
          <ProgressBar color="mint" value={language.progress} />
        </>
      ))}

      <h3>Frameworks</h3>
      <div className="Programming-frameworks">
        <div>
          <p>React</p>
          <p>Rails</p>
        </div>
        <div>
          <p>Node.js</p>
          <p>Express</p>
        </div>
      </div>

      <h3>Database</h3>
      <p>Firebase ○ MongoDB ○ Postgresql</p>
    </div>
  );
}
