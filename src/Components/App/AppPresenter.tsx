import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import AddPlace from '../../Routes/AddPlace';
import EditAccount from '../../Routes/EditAccount';
import FindAddress from '../../Routes/FindAddress';
import Home from '../../Routes/Home';
import Login from '../../Routes/Login';
import PhoneLogin from '../../Routes/PhoneLogin';
import Places from '../../Routes/Places';
import Ride from '../../Routes/Ride';
import Settings from '../../Routes/Settings';
import SocialLogin from '../../Routes/SocialLogin';
import VerifyPhone from '../../Routes/VerifyPhone';

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </BrowserRouter>
  );
};
const LoggedInRoutes: React.SFC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/ride" component={Ride} />
      <Route path="/edit-account" component={EditAccount} />
      <Route path="/settings" component={Settings} />
      <Route path="/places" component={Places} />
      <Route path="/add-place" component={AddPlace} />
      <Route path="/find-address" component={FindAddress} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
const LoggedOutRoutes: React.SFC = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/phone-login" component={PhoneLogin} />
      <Route path="/verify-phone" component={VerifyPhone} />
      <Route path="/social-login" component={SocialLogin} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppPresenter;
