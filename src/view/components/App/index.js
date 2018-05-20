import React from 'react';
import NavBar from 'view/components/NavBar';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'view/pages/HomePage';
import NewsPage from 'view/pages/NewsPage';
import ProfilePage from 'view/pages/ProfilePage';
import LoginPage from 'view/pages/LoginPage';
import NotFoundPage from 'view/pages/NotFoundPage';
import ProtectedRoute from 'view/components/Routes/ProtectedRoute';
import GuestRoute from 'view/components/Routes/GuestRoute';

const App = () => (
  <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/news" component={NewsPage} />
      <ProtectedRoute path="/profile" component={ProfilePage} />
      <GuestRoute path="/login" component={LoginPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </React.Fragment>
);

export default App;