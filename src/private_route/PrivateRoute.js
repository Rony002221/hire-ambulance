import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import useAuth from "../custom_Hook/useAuth";

const PrivateRoute = ({children, ...rest}) => {

    let auth = useAuth();
    let location = useLocation()
    let history = useHistory()
    return (
        <Route
        {...rest}
        render={(props) =>
          auth.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;