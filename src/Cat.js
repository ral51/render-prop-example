import React from 'react';

export function Cat(props) {
  var pos = props.mouse;

  return <img src="cat.jpg" style={{ position: 'absolute', left: pos.x, top: pos.y }} />;
}
