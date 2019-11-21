import React, { lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './Admin.styles.scss';
import Spinner from '../../components/Spinner/Spinner.component';

const LoginPage = lazy(() => import('../Login/Login.component'));
const JobsPage = lazy(() => import('../JobsPage/JobsPage.component'));

const Admin = ({ match, currentUser }) => {
    return (
        <div className="admin-page">
            <Suspense fallback={<Spinner />}>
            <Route
                exact
                path={`${match.path}/login`}
                render={() =>
                    currentUser ? (
                      <Redirect to={`${match.path}/jobs`} />
                    ) : (
                      <LoginPage />
                    )
                }
            />
            <Route
                exact
                path={`${match.path}/jobs`}
                component={JobsPage}
            />
            </Suspense>
        </div>
    );
}

const mapStateToProps = ({ user }) => {
    return {
        currentUser: user.currentUser
    };
}

export default connect(mapStateToProps)(Admin);