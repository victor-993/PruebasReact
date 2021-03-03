import React, {useState} from 'react'
import ProTypes from 'prop-types'



const ContadorCesar = ({priPro, proText, valorDef= "defect"}) =>{
 const [conta, setConta]= useState(0)

     return (
      <>
        <h1>Hola desde contador Cesar</h1>
        <p> Conter {conta} </p>
        <button onClick={() => setConta(conta +1)}>
          sumar
        </button>
        <button onClick={() => setConta(0)}>
          Reset
        </button>
        <button onClick={() => setConta(conta -1)}>
          Restar
        </button>
        </>
      )

}
ContadorCesar.propTypes = {
        priPro: ProTypes.string.isRequired

}


export default ContadorCesar