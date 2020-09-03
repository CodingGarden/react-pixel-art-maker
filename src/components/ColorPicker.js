import React from 'react';
import { PhotoshopPicker } from 'react-color';

import useStyles from './ColorPicker.styles';

const ColorPicker = ({ previousColor, currentColor, onSetColor, showColorPickerButton }) => {
  
  const classes = useStyles();
  const colorChange = (color) => {
    onSetColor(color.hex ? color.hex : color);
  };
  const showButton = () => {
    showColorPickerButton(false);
  }
  return (
    <PhotoshopPicker
      header={'Choose a color'}
      className={classes.colorPicker}
      color={currentColor}
      onCancel={() => {
        colorChange(previousColor ? previousColor : currentColor);
        showButton();
      }}
      onAccept={showButton}
      onChange={colorChange}
    />
  );
};

export default ColorPicker;
