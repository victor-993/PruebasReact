import React,{useState} from 'react';
import PropTypes from 'prop-types';

const Contador = ({time}) =>{
    const [num, setNum] = useState(time);
    return(
        <>
            <h1>Contador</h1>
            <p>El contador esta en {num}</p>

            <button id='suma' onClick={() => setNum(num + 1)}>Sumar</button>
            <button id='resta' onClick={() => setNum(num - 1)}>Restar</button>
            <button id='borrar' onClick={() => setNum(0)}>Borrar</button>
        </>
    )
}

Contador.propTypes ={
    time: PropTypes.number.isRequired
}

export default Contador
