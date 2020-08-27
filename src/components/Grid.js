/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import useStyles from './Grid.styles';

const offCell = {
  on: false,
  color: '#000000',
};

const Grid = ({ currentColor, cells, setCells }) => {
  const classes = useStyles();
  const updateCell = (i, defaultState) => (e) => {
    e.preventDefault();
    setCells(
      cells.map((cell, cellIndex) => {
        if (cellIndex === i) {
          if (defaultState) return defaultState;
          return {
            on: true,
            color: currentColor,
          };
        }
        return cell;
      })
    );
  };
  return (
    <div className={classes.grid}>
      {cells.map((cell, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          style={{ background: cell.on ? cell.color : '#ffffff' }}
          className={classes.cell}
          onClick={updateCell(i)}
          onContextMenu={updateCell(i, offCell)}
        />
      ))}
    </div>
  );
};

export default Grid;
