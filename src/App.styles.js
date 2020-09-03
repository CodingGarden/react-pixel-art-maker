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
    maxWidth: '50%',
    fontFamily: 'monospace',
    wordWrap: 'break-word',
  },
  showColorPickerButton: {
    cursor: 'pointer',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
    margin: '3rem',
  }
});
