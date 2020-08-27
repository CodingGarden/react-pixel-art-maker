import React from 'react';

import useStyles from './ColorPicker.styles';

const ColorPicker = ({ currentColor, onSetColor }) => {
  const classes = useStyles();
  const colorChange = (event) => {
    onSetColor(event.target.value);
  };
  return (
    <input
      className={classes.colorPicker}
      type="color"
      value={currentColor}
      onChange={colorChange}
    />
  );
};

export default ColorPicker;
