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
        </>
    )
}

Contador.prototypes ={
    priProp: PropTypes.string.isRequired
}

export default Contador

