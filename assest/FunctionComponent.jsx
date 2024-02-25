import React, { useState, useEffect } from 'react';

function FunctionalLifecycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    // Simulating fetching data from an API after component mounts
    const timer = setTimeout(() => {
      console.log('Data fetched');
    }, 2000);

    return () => {
      console.log('Component will unmount');
      clearTimeout(timer);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  useEffect(() => {
    console.log('Component updated');
  }, [count]); // Runs every time 'count' state changes

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default FunctionalLifecycle;
