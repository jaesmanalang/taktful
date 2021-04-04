import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        state.user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
