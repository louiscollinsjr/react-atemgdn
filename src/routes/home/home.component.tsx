import React, { useState } from 'react';

// Define the types for props if any
interface HomeProps {
    title: string;
  }
  
  // Define the functional component with TypeScript
  const Home: React.FC<HomeProps> = ({ title }) => {
    // Define local state using the useState hook
    const [count, setCount] = useState<number>(0);
  
    // Handler function to increment the count
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    // Handler function to decrement the count
    const handleDecrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h1>{title}</h1>
        <p>Current Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );
  };
  
  export default Home;