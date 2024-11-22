import React, { useState } from 'react';

function State3() {
  
  const [color, setColor] = useState('red');


  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  return (
    <div style={{ padding: '20px' }}>
      
      <h1 style={{ color: color }}>My favorite color is {color}</h1>

      
      <div style={{ marginTop: '10px' }}>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              backgroundColor: c,
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 15px',
              margin: '5px',
              cursor: 'pointer',
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default State3;
