import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AccountPage from '../pages/account/account.page';
import AuthPage from '../pages/auth/auth.page';
import HomePage from '../pages/home/home.page';
import ShopPage from '../pages/shop/shop.page';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/authentication" component={AuthPage} />
    <Route exact path="/account" component={AccountPage} />
  </Switch>
);

export default Routes;
