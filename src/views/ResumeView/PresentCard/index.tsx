import React from 'react';
import Card from '../../../components/atoms/Card';

import './styles.scss';

export default function PresentCard(): JSX.Element {
  return (
    <>
      <div className="PresentCard-circle" />

      <Card className="PresentCard-card">
        <div className="PresentCard-header">
          <div>
            <h3 className="PresentCard-title">Today I am...</h3>
          </div>
        </div>

        <p>
          🏥 Interning at Wellsheet, where everyday I learn new patterns for building a scalable data-intensive
          application
        </p>
        <p>🌱 Attending Stevens Institute of Technology as a senior computer science student</p>
        <p>📚 Self-studying topics I am curious about such as ML, software architecture, and UI/UX design</p>
        <p>🔎 On the hunt for post-undergrad opportunities in industry </p>
      </Card>
    </>
  );
}
