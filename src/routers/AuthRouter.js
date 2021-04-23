import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { authScreen } from '../components/auth/authScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                    <Route 
                        exact
                        path="/auth"
                        component={ authScreen }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ RegisterScreen }
                    />

                    <Redirect to="/home" />

                </Switch>
        </div>
    )
}
