/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo } from 'react';

import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import useStyles from './App.styles';

const offCell = {
  on: false,
  color: '#000000',
};
const initialCells = Array.from({ length: 40 }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const [isColorPickerShowed, toggleColorPickerVisibility] = useState(false);
  const classes = useStyles();
  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );
  const chatString = useMemo(
    () => cells.map((cell) => cell.color.slice(1)).join(','),
    [cells]
  );
  return (
    <div className={classes.app}>
      {isColorPickerShowed ?
       <ColorPicker previousColor={colorSwatch[colorSwatch.length - 1]} 
       showColorPickerButton={toggleColorPickerVisibility} currentColor={currentColor} 
       onSetColor={setCurrentColor} /> :
        <div style={{ backgroundColor: currentColor }} 
        onClick={(e) => toggleColorPickerVisibility(true)} 
        className={classes.showColorPickerButton}>Choose A Color</div>}
      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            className={classes.colorSwatch}
            style={{ background: color }}
          />
        ))}
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <p className={classes.chatString}>
        {/* eslint-disable-next-line */}
        !rgb
        {' '}
        {chatString}
      </p>
    </div>
  );
}

export default App;
