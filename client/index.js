/*
 * Designed, built, and released under MIT license by @myanbin. Learn more at
 * https://github.com/myanbin
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'


import Console from './components/Console'
import Configure from './components/Configure'
import Monitor from './components/Monitor'
import Outcome from './components/Outcome'

 

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Console}>
      <Route path="/configure" component={Configure} />
      <Route path="/monitor" component={Monitor} />
      <Route path="/outcome" component={Outcome} />
    </Route>
  </Router>
), document.getElementById('app'))
