// src/Counter.jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect will run after the component has rendered
  useEffect(() => {
    // This is a side effect we want to perform
    console.log('Effect is running!');
    document.title = `You have clicked ${count} times`;

    // The Dependency Array [count] means that this effect will
    // re-run ONLY when the value of 'count' changes.
  }, [count]);

  // Function to handle button click
  const handleIncrement = () => {
    // Use setCount to update the state value
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>ตัวนับเลข (พร้อม Effect)</h3>
      <p>คุณกดไปแล้ว: {count} ครั้ง</p>
      {/* Use onClick to bind the event to the function */}
      <button onClick={handleIncrement}>
        เพิ่มค่า +
      </button>
      <button onClick={handleDecrement} style={{ marginLeft: '8px' }}>
        ลดค่า -
      </button>
    </div>
  );
}

export default Counter;