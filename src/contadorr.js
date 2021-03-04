import react, { useState } from 'react'
import PropTypes from 'prop-types'

const Contador = (propNum) => {
    const [cuenta, setCuenta] = useState(0);

    return (
        <>
        <h2>{cuenta}</h2>
        <button onClick={( () => setCuenta(cuenta + 1))} > ¡Más!</button>
        <button onClick={( () => setCuenta(cuenta - 1))} > ¡Menos!</button>
        <br/>
        <br/>
        <button onClick={( () => setCuenta(0))} > ¡Reset!</button>
       
        </>
    )
}

Contador.prototypes = {
    propNum: PropTypes.number.isRequired
}

export default Contador;