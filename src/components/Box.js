import React from 'react';
import './box.css';

export default ({ text }) => {
  return (
    <div className="box">
      <h3>{text}</h3>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto asperiores
           aspernatur cupiditate doloribus est ex,
      </div>
    </div>
  );
};