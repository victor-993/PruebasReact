import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Contador = ({valorinicial}) =>{

    

    const[cont,setCont] = useState(valorinicial);


    return(
        <>
            <h1>contador = {cont}</h1>
            <button onClick={() => setCont(cont+1)}>Aumentar</button>
            <button onClick={() => setCont(cont-1)}>Restar</button>
            <button onClick={() => setCont(0)}>Reset</button>
        </>
    )




}

Contador.propTypes = {
    cont: PropTypes.number.isRequired
}

export default Contador

