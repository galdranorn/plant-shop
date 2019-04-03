import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

// import components
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home.js';
import { Basket } from './components/Basket/Basket.js';
import { Product } from './components/Product/Product';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/basket'} component={Basket} />
            <Route exact path={'/produkt/:id'} component={Product} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
