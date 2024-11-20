import React from 'react';

function MyButton({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Reveal Truth
    </button>
  );
}

export default MyButton;
