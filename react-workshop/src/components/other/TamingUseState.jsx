import React, { useState } from 'react';

const TamingUseState = () => {
  const initStateFunc = () => 5;

  const [number, setNumber] = useState(initStateFunc);

  const handleDecr = () => {
    if (number) setNumber((n) => n - 1);
  };

  const handleIncr = () => {
    setNumber((n) => n + 1);
  };

  return (
    <div>
      <button onClick={handleDecr}>-</button>
      {number}
      <button onClick={handleIncr}>+</button>
      <button onClick={() => setNumber(0)}>set 0</button>
    </div>
  );
};

export default TamingUseState;
