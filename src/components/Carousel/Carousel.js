import React from 'react';

const Carousels = (props) => {
  const pic = require(`../../service/images/${props.path}`).default;
  return (
    <div>
      <img src={pic} alt="" />
    </div>
  );
};
export default Carousels;
