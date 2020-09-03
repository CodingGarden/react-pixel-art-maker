import { createUseStyles } from 'react-jss';

export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
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
      size: 25
    },
    '&:hover':{
      color: '#56BC58',
    }
    
    },
});
