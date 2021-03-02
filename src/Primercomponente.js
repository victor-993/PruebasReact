import React, { useState} from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Primercomponente = ({propNum}) => {

    const [conta, setConta] = useState(0);
    let texto = 'Primer proyecto react'
    return(
        <>
        <h1>Funcion componente</h1>
        <h2>{texto} {propNum}</h2>

        <div>
        <p> contador {conta}</p>
        <button onClick={() => setConta(conta + 1)}>
            Aumentar
        </button>
        <button onClick={() => setConta(conta - 1)}>
            Disminuir
        </button>
        <button onClick={() => setConta(conta == 0)}>
            Resetear
        </button>
        </div>
        </>
    )
}




Primercomponente.propTypes = {
    propNum: PropTypes.number.isRequired
}

export default Primercomponente