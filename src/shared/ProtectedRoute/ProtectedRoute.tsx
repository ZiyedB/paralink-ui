import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { UserState } from '../../state/user';

// Disable the eslint for next any
// eslint-disable-next-line
const ProtectedRoute = ({ component: Component, ...rest }: any): JSX.Element => {
  const isLoggedIn = useSelector<any, UserState['isLoggedIn']>((state) => {
    return state.user.isLoggedIn;
  });

  /** Verify that user is logged in otherwise redirect to login page */
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
