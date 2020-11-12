/* eslint-disable jsx-a11y/mouse-events-have-key-events */
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
  const updateCell = (i) => (e) => {
    e.preventDefault();
    // if left or right click is pressed
    if (e.buttons === 1 || e.buttons === 2) {
      setCells(
        cells.map((cell, cellIndex) => {
          if (cellIndex === i) {
            if (e.buttons === 1) {
              return {
                on: true,
                color: currentColor,
              };
            }
            return offCell;
          }
          return cell;
        }),
      );
    }
  };

  return (
    <div className={classes.grid}>
      {cells.map((cell, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          style={{ background: cell.on ? cell.color : '#ffffff' }}
          className={classes.cell}
          onMouseOver={updateCell(i)}
          onMouseDown={updateCell(i)}
          onContextMenu={(e) => e.preventDefault()}
        />
      ))}
    </div>
  );
};

export default Grid;
