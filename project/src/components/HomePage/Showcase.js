import React from "react";
import Main from '../Search/Main'
const Showcase = () => {
  return (
    <div>
      <div className="slogan"></div>
      <div className='frontground'>
        <div className="slog">
          <h1 className="homeTitle"> We create
          <br /> You celebrate
          <h1 className="events">EVENTS</h1>
          </h1>
         <div className='whitebackground'>
          <Main className='WhiteBox' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
