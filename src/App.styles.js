import { createUseStyles } from 'react-jss';

export default createUseStyles({
  appdark: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    color: '#FFFFFF',
    background:{
      color: '#1a1919',
    },
    transition: '0.3s',
  },
  applight: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    color: '#00000',
    background:{
      color: '#fff',
    },
    transition: '0.3s',
  },
  colorSwatchContainer: {
    display: 'flex',
  },
  colorSwatch: {
    margin: '0.5rem',
    padding: 0,
    width: '25px',
    height: '25px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  chatString: {
    position: 'relative',
    maxWidth: '50%',
    fontFamily: 'monospace',
    wordWrap: 'break-word',
  },
  parenti: {
    position: 'relative',
  },
  
  copyButton: {
    position: 'relative',
    left: '300px' ,
    top: '5px' ,
    font:{
      size: 20
    },
    '&:hover':{
      color: '#56BC58',
      cursor: 'pointer',
      transform: 'scale(1.3)',
      transition: '0.2s',
    }    
    },
      
});
