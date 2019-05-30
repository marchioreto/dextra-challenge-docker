import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Ingredient from '../../containers/Ingredient';
import Burger from '../../containers/Burger';
import Sale from '../../containers/Sale';
import Dashboard from '../../containers/Dashboard';

const App = () => (
  <div>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/ingredientes" component={Ingredient} />
        <Route path="/lanches" component={Burger} />
        <Route path="/pedidos" component={Sale} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  </div>
);

export default App;
