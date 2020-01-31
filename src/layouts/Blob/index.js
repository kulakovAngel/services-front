import React from 'react';
import classes from './style.module.css';

function Blob({ size, top, left, z }) {
  return (
    <div
      className={ classes.blob }
      style={{
        top: top || '0',
        left: left || '0',
        width: `${size*1.25 || 250}px`,
        height: `${size || 200}px`,
        zIndex: z,
      }}
      />
  )
};
export default Blob;