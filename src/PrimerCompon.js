import React, { useState} from 'react'
import PropTypes from 'prop-types'


const PrimerCompon = ({primerProp}) => {

    const [conta, setConta] = useState(0)



    return (
        <div>
            <h1>Super contador 😎</h1>
        <p>contador actual: {conta}</p>
        <button onClick={() => setConta(0)}>restablecer</button>
        <button onClick={() => setConta(conta -1)}>restar</button>
        <button onClick={() => setConta(conta +1)}>sumar</button>
        
        </div>
    )
}

PrimerCompon.propTypes = {
    primerProp: PropTypes.number.isRequired
}

export default PrimerCompon;