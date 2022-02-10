import React from 'react';
import './MidBox.css';

const MidBox = (props) => {
  return (
    <div id='MidBox' style={{backgroundColor: props.color}}>
      {props.color}
    </div>
  )
}

export default MidBox