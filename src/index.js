import React from 'react'
import ReactDOM from 'react-dom'
import Contador from './Contador'
import './index.css'


const divRoot = document.querySelector('#root')

ReactDOM.render(<Contador priProp= "123" propText= "Soy texxto" />, divRoot)
