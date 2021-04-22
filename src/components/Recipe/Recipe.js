import React from 'react';

const Recipe = (props) => {
  const pic = require(`../../service/images/${props.path}`).default;
  return (
    <div className="column" onClick={props.clicked}>
      <div className="ui fluid card">
        <div className="image">
          <img src={pic} alt={props.name} className="MovieImage" />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
          <div className="meta">serves : {props.serve}</div>
        </div>
        <div className="extra content">
          <div>
            <i className="clock icon"></i>
            {props.time} Minutes
          </div>
          <div>
            <i className="user icon"></i>
            {props.author}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
