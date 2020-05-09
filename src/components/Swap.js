import React from 'react';

const Swap = ({ onSwap }) => {
  return (
    <div>
      <span className='swap' onClick={onSwap}>
        &#8595; &#8593;
      </span>
    </div>
  );
};

export default Swap;
