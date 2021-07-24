import React from 'react';

import LoaderGif from '../../assets/icons/loader.svg';

import './styles.scss';
export default function LoadingView(): React.ReactElement {
  return (
    <div className="LoadingView">
      <img className="LoadingView-loader" src={LoaderGif} alt="loading" />
    </div>
  );
}
