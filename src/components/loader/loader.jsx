import React from 'react';

import './loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <div style={{ width: '100%', height: '100%' }} className='lds-ripple'>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
