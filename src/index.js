import React from 'react'
import ReactDom from 'react-dom'

import PrimerComponente from './PrimerComponente'

const divRoot = document.querySelector('#root')

ReactDom.render(<PrimerComponente propNum="0"/>, divRoot)

