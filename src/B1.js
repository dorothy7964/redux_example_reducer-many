import React from 'react';
import B2 from './B2';

const B1 = ({btn}) => {
  return (
    <div>
      <h2>B1</h2>

      <B2 btn={btn} />
    </div>
  )
}

export default B1;
