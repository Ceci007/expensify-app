import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createMemoryHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <PublicRoute component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;