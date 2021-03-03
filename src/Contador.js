import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Contador = ({priProp, propText, valorDef ="defect"}) => {
    const [conta, setConta] = useState(0);

    return( 
        <>
        
        <p> <b> <center> Mi contador </center>  </b> <br/>  <center> {conta} </center> <br/> </p>

        <center> 
        <button onClick ={() => setConta(conta +1)}> 
        <b>Suma</b> </button>
        <button onClick= {() => setConta(conta -1)}> 
        <b>Resta</b> </button>
        <button onClick ={() => setConta(0)}> 
        <b>Reset</b> </button>
        </center>
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
