import React, { useState } from 'react';

const State3 = () => {
    const [total, setTotal] = useState(0);

    return (
        <div>
            <p>Total: {total}</p> 
            <button
                onClick={() => {
                    setTotal(total + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setTotal(total - 1); 
                }}
            >
                Decrement
            </button>
        </div>
    );
};

export default State3;
