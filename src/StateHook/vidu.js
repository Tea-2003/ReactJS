import React, { useState } from 'react';

function Example() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>
        Click here
      </button>
    </div>
  );
}

export default Example;