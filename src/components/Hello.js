import React from "react";

const Hello = () => {
  // With JSX

  return (
    <div>
      <h1>Hello Component JSX</h1>
    </div>
  );

  // Without JSX
  
  // return React.createElement('div', { id: 'hello', className: 'dummyClass' },
  // React.createElement('h1', null, 'Hello Component'))
};

export default Hello;
