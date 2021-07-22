import React, { PropsWithChildren } from 'react';

import Navbar from './Navbar';
import './styles.scss';

export default function NavLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="NavLayout">
      <div className="container">
        <Navbar />
        <div className="NavLayout-wrapper">{children}</div>
      </div>
    </div>
  );
}
