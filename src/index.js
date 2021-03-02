import React from 'react';
import ReactDOM from 'react-dom';
import Contador from './contador'

const divroot = document.querySelector('#root')

ReactDOM.render(<Contador time={0} />, divroot)