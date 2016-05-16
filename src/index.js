import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import { Application } from './container/Application/Application';
import { Home } from './container/Home/Home';

render((
  <Router
    history={browserHistory}
    onUpdate={() => { window.scrollTo(0, 0); }}
  >
    <Route path="/" component={Application}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('root'));
