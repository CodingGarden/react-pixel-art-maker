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
    marginTop: '1rem',
    width: '290px',
    height: '160px',
    padding: '0.5rem 0.8rem',
    outline: 'none',
    fontFamily: 'monospace',
    wordWrap: 'break-word',
    resize: 'none',
    overflow: 'hidden',
  },
  copyButton: {
    fontFamily: 'monospace',
    marginTop: '1rem',
    backgroundColor: '#56BC58',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
