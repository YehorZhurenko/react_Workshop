import React from 'react';

const TestComponent = (props) => {
  const arr = ['Egor', 'Anya', 'Anton', 'Sveta'];

  console.log(props);

  return arr.map((person) => <div>{person}</div>);
};

export default TestComponent;
