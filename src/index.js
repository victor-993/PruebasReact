import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Primercompon from './Primercompon'



const divRoot = document.querySelector('#root')

ReactDOM.render(<Primercompon  priProp="123" propText="Soy texto" /> ,divRoot)