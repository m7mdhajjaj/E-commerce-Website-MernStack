import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-500 text-lg sm:text-xl'>
        {text1}
        <span className='text-gray-700 font-medium text-xl sm:text-2xl'> {text2}</span>
      </p>
      <p className='w-8 sm:w-12 h-[2px] sm:h-[3px] bg-gray-700'></p>
    </div>
  );
};

export default Title;