import React from 'react';
import './CreateEvent.css'
import CustomizedSteppers from './CustomizedSteppers'
function CreateEvent() {
  return (
    <div className='create-event'>
      {console.log(window.location.href)}
      <CustomizedSteppers/>
    </div>
  );
}

export default CreateEvent;
