
//Juan Camilo Gonzalez 1735277-2711
import React from 'react'
import ReactDOM from 'react-dom'
import PrimerCompon from './PrimerCompon'



const divRoot = document.querySelector('#root')
ReactDOM.render(<PrimerCompon primerProp/>, divRoot)
//ReactDOM.render(<React.StrictMode><PrimerCompon inicio={0}/></React.StrictMode>,document.querySelector('#root'))

