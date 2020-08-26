import './custom.sass'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Menu from '../template/Menu'
import Routes from './Routes'

export default props => (
  <div>
    <Router>
      <Menu />
      <Routes />
    </Router>
  </div>
)
