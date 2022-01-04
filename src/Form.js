import React from 'react';
import mobile from './Assets/mobile.jfif';
import download2 from './Assets/download2.jfif';
import OIP1 from './Assets/OIP1.jfif';
import OIP3 from './Assets/OIP3.jfif';
import OIP4 from './Assets/OIP4.jfif';
import OIP5 from './Assets/OIP5.jfif';

import './Form.css';

const Form = () => {
  return (
    <div className="image">
      <h1> Hello Form...</h1>
      <img src={mobile} alt="This is a Mobile"></img>
      <img src={download2} alt="This is a mobile too"></img>
      <img src={OIP1} alt="This is a mobile too"></img>
      <img src={OIP3} alt="This is a mobile too"></img>
      <img src={OIP4} alt="This is a mobile too"></img>
      <img src={OIP5} alt="This is a mobile too"></img>
    </div>
  );
};

export default Form;
