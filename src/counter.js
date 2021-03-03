import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types'

const Contador = ({priProp, propText, valorDef= "defect"}) => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1 class="h1">Has hecho {count} clicks</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click me
      </button>
      <button onClick={() => setCount(count = 0)}>
        Click me
      </button>
      <br></br>
      <br></br>
      By {propText}
    </div>
  );
}

Contador.propTypes = {
    propText: propTypes.string.isRequired
}

export default Contador;