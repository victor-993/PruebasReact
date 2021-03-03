import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'

const PrimerComponente = ({propNum}) => {
    const [conta, setConta] = useState(0)
    return (
    <>
        <h1>Contador</h1>
        <h2>{conta}</h2>
        <button onClick={() =>setConta(conta -1)}>-</button>
        <button onClick={() =>setConta(conta +1)}>+</button>
        <button onClick={() =>setConta(0)}>Reset</button>
    </>
    )
}

PrimerComponente.propTypes = {
    propNum: PropTypes.number.isRequired
}

export default PrimerComponente