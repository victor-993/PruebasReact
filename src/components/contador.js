import React, {useState} from 'react' ;
import propTypes from 'prop-types'

const Contador = ({name}) => {

    const [count, setCount] = useState(0)

    return (

        <>
          <h1>Contador by {name}:</h1>
          <p>{count}</p>
          <button onClick={(()=> setCount(count + 1 ))}>Sumar</button>
          <button onClick={(()=> setCount(count - 1 ))}>Restar</button>
          <button onClick={(()=> setCount(0))}>Restaurar</button>
       
        </> 
    )
}

Contador.propTypes = {
   name: propTypes.string.isRequired
}

export default Contador;