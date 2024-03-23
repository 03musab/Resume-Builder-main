import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';

const PrivateRoute = ({ component: RouteComponent, children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Navigate to={'/'} />
        )
      }
    />
  );
};

export default PrivateRoute;
