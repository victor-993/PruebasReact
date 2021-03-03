import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ContadorDinamico = ({inicio}) => {
    const [contador, setContador] = useState(inicio);
    
    return (
        <div>
            <h1>Bievenido al Contador {'--->'} {contador} {'<-----'}</h1>
            <button onClick={()=> setContador(contador+1)}>Aumentar +</button>
            <button onClick={()=> setContador(contador-1)}>Disminuir -</button>
            <button onClick={()=> setContador(0)}>Reiniciar ...</button>
        </div>
    )
}

ContadorDinamico.propTypes = {
    inicio: PropTypes.number.isRequired
}

export default ContadorDinamico
