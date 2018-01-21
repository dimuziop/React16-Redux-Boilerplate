import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import DashboardPage from './../components/DashboardPage';
import LoginPage from './../components/LoginPage'
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Footer from './../components/Footer';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';

export const history = createHistory();

const AppRouter = (props) =>(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path={"/"} component={LoginPage} exact={true}/>
                <PublicRoute path={"/help"} component={HelpPage} />
                <PrivateRoute path={"/dashboard"} component={DashboardPage} visibleExpenses={props.visibleExpenses} />
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </div>

    </Router>
);
export default  AppRouter;
