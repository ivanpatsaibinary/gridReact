import React from 'react';
import './box.css';

export default ({ text, title }) => {
  return (
    <div className='box'>
      <h3>{ title }</h3>
      <div>{ text }</div>
    </div>
  );
};
