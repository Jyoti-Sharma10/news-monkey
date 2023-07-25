import React from 'react';
import Loading from './Spinner-3.gif';

export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={Loading} alt="Loading" />
    </div>
  )
}
