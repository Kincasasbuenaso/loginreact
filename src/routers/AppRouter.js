import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { authScreen } from '../components/auth/authScreen';
import { HomeScreen } from '../components/home/HomeScreen';


 

export const AppRouter = () => {
    return (
        <Router>
            
                <Switch>
                    <Route 
                        path="/auth"
                        component={ authScreen }
                    />

                    <Route 
                        exact
                        path="/home"
                        component={HomeScreen}
                    />

                    <Redirect to="/home" />

                </Switch>
            
        </Router>
    )
}
