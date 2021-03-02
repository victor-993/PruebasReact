import React from 'react'
import ReactDOM from 'react-dom'
import ContadorDinamico from './Componentes/contadorDinamico'
import './index.css'

// Santiago Calderon - 1842025

ReactDOM.render(<React.StrictMode><ContadorDinamico inicio={0}/></React.StrictMode>,document.querySelector('#root'))
