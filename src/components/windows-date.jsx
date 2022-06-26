import React from "react";
import moment from 'moment';

const time = moment().format('H:mm');
const date = moment().format('D/MM/YYYY')

function Date() {
  return (
    <div className="task-date">
      <div className="container-date">
        <div className="time">{time}</div>
        <div className="date">{date}</div>
      </div>
      <div className="container-moon">
        <div className="moon"></div>
      </div>
    </div>
  );
}

export default Date;