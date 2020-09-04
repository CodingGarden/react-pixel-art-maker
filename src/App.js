/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo, useRef, useEffect } from 'react';

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
  const classes = useStyles();

  const lastfive = useRef(['#56BC58']);

  useEffect(() => {
    if (lastfive.current.includes(currentColor)) {
      lastfive.current = lastfive.current.filter((val) => val != currentColor);
      lastfive.current.push(currentColor);
      return;
    }
    console.log('in effect', lastfive.current);
    //let lastLastFive = lastfive.current.slice()
    lastfive.current.push(currentColor);
    lastfive.current = lastfive.current.slice(-5);
  }, [cells]);

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
      Last 5
      <div className={classes.colorSwatchContainer}>
        {lastfive.current.map((color) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            onContextMenu={() => alert(color)}
            className={classes.colorSwatch}
            style={{ background: color }}
          />
        ))}
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <p className={classes.chatString}>
        {/* eslint-disable-next-line */}
        !rgb {chatString}
      </p>
    </div>
  );
}

export default App;
