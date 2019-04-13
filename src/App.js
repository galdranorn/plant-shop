import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

// import components
import { Layout } from './components/Layout/Layout';
import Home from './components/Home/Home';
import Basket from './components/Basket/Basket';
import Product from './components/Product/Product';

// import some dumb components
import Faq from './components/Samples/Faq/Faq';
import Rules from './components/Samples/Rules/Rules';
import Contact from './components/Samples/Contact/Contact';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/basket'} component={Basket} />
            <Route exact path={'/product/:id'} component={Product} />
            <Route exact path={'/faq'} component={Faq} />
            <Route exact path={'/rules'} component={Rules} />
            <Route exact path={'/contact'} component={Contact} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}