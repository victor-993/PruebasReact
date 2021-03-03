import React, { useState} from 'react'
import PropTypes from 'prop-types'


const Primercompon = ({priProp, propText , valorDef="defect"}) => {
   
    const [ conta, setConta] = useState(0)
    
    


    return (
     <>   
     <p> counter {conta} </p>
     <button onClick={() => setConta(conta +1)}>
         sumar
     </button>
     <button onClick={() => setConta(conta +1)}>
         reset
     </button>
     <button onClick={() => setConta(conta +1)}>
         restar
     </button>
    </>
    )
}


Primercompon.propTypes = {
    priProp: PropTypes.string.isRequired
}

export default Primercompon