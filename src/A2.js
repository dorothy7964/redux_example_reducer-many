import React from 'react';
import A3 from './A3';

const A2 = ({num}) => {
  return (
    <div>
      <h2>A2</h2>
      <div>{num}</div>

      <A3 num={num} />
    </div>
  )
}

export default A2;
