/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo, useRef } from 'react';

import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import useStyles from './App.styles';
import { getRandomArtwork } from './artworks';

function App() {
  const [cells, setCells] = useState(getRandomArtwork());
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const commandString = useRef();
  const classes = useStyles();
  function copyText() {
    commandString.current.select();
    commandString.current.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
  }
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
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <textarea
        value={'!rgb ' + chatString}
        readOnly
        ref={commandString}
        className={classes.chatString}
      />
      <button onClick={copyText} className={classes.copyButton}>
        copy
      </button>
    </div>
  );
}

export default App;
