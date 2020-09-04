import React from 'react';
import toggleStyles from './Toggle.styles';
import DarkModeToggle from "react-dark-mode-toggle";

const Toggle =(props)=>{

  const classes = toggleStyles();
  return(   
    <div className={classes.modeToggle}>
      <DarkModeToggle 
        className = {classes.modeToggle}
        onChange={props.setDarkMode}
        checked={props.darkMode}
        size={60}
        speed={3}
       />
    </div>
  )
}

export default Toggle;