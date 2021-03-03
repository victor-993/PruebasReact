import React, { useState } from 'react'
import PropTypes from 'prop-types'

//Funciones
function Contador(acumulado) {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Este es un contador, se han contado {count} clicksss </h1>
            <button onClick={() => setCount(count + 1)}> 
                Sumar </button>
            <button onClick={() => setCount(count - 1)}>
                Restar</button>
            <button onClick={() => setCount(0)}>
                Reiniciar</button>
        </>
    )
}

Contador.propTypes = {
    acumulado: PropTypes.number.isRequired
}

Contador.defaultProps = {
    acumulado: 0
}

export default Contador