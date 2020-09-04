/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo, useEffect } from 'react';
import storage from 'local-storage-fallback';

import {getInitialMode} from './DarkMode/InitialMode';
import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import useStyles from './App.styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FaRegCopy} from "react-icons/fa";
import ModeToggle from './DarkMode/ModeToggle';

const offCell = {
  on: false,
  color: '#000000',
};
const initialCells = Array.from({ length: 40 }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const [darkMode,setDarkMode] =useState(getInitialMode());
  
  useEffect(() =>{
    storage.setItem('dark', JSON.stringify(darkMode));
  },[darkMode]); 
  
  const classes = useStyles();

  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );
  const chatString = '!rgb '.concat( useMemo( 
    () => cells.map((cell) => cell.color.slice(1)).join(','),
    [cells])
  );

  
  
  return (
  <div className={darkMode ? classes.appdark : classes.app}>
    <div className={classes.toggle}>
      <ModeToggle 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
      />
   
     </div>
      <ColorPicker 
        currentColor={currentColor} 
        onSetColor={setCurrentColor} 
      />
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
      <CopyToClipboard 
          className={classes.copyButton}  
          text={chatString}>
          <FaRegCopy /> 
      </CopyToClipboard>

      <p className={classes.chatString}>
         {/* eslint-disable-next-line */}
         {' '}
         {chatString}
       </p>
       
  </div>
  );
}

export default App;
