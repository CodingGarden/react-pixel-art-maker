/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo } from 'react';

import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import useStyles from './App.styles';

//  A custom function to do a kinda-dict based compression.
function smallify(command) {
  let colours;
  //  Allows for direct passing of a !rgb command or an array of colours.
  if (typeof command === 'string') {
    colours = command.split(/[ ,]/g);
  } else colours = command;
  if (colours[0].startsWith('!')) colours.shift();
  const firsts = new Map();
  let next = 0;
  return colours
    .reduce((res, colour) => {
      //  Check if this colour has been specified. If it has use the index of the first occurance as it is garunteed to be shorter.
      let outPart = '';
      if (firsts.has(colour)) {
        outPart += `*${firsts.get(colour).toString(16)}`;
      } else {
        //  Otherwise just ad the raw colour and save this as the first occurance.
        outPart += colour;
        firsts.set(colour, next);
        next += 1;
      }
      return `${res}${outPart},`;
    }, '!rgb ')
    .slice(0, -1);
}

const offCell = {
  on: false,
  color: '#000000',
};
const initialCells = Array.from({ length: 40 }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const classes = useStyles();
  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );
  const chatString = useMemo(
    () => smallify(cells.map((cell) => cell.color.slice(1))),
    [cells]
  );
  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
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
      <p className={classes.chatString}>{chatString}</p>
    </div>
  );
}

export default App;
