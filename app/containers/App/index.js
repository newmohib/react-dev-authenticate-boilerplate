/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

// custom
import SideBar from 'containers/SideBar/Loadable';
import Navbar from 'containers/Navbar/Loadable';
import CustomFooter from 'containers/CustomFooter/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import Login from 'containers/Login/Loadable';
import Signup from 'containers/Signup/Loadable';
import ViewUsers from 'containers/ViewUsers/Loadable';
import Logout from 'containers/Logout/Loadable';
import { getFromStore } from '../../utils/localstorage';
import { setAuthorizationToken } from './actions';
import { makeSelectIsAuthorization } from './selectors';

function App(props) {
  console.log('root reload');
  const { isAuthorization, setAuthorToken } = props;
  useEffect(() => {
    const getAuthorizationTokenToLocalstorage = getFromStore('isAuthorization');

    if (getAuthorizationTokenToLocalstorage) {
      setAuthorToken(getAuthorizationTokenToLocalstorage);
    }
  }, [isAuthorization]);

  const githubDeployPath = process.env.GITHUB_DEPLOY_PATH ? process.env.GITHUB_DEPLOY_PATH : '';

  return (
    <div>
      <SideBar />
      <main role="main" className="flex-shrink-0">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route exact path={`${githubDeployPath}/`} component={Login} />
                <Route exact path={`${githubDeployPath}/dashboard`} component={Dashboard} />
                <Route exact path={`${githubDeployPath}/logout`} component={Logout} />
                <Route exact path={`${githubDeployPath}/signup`} component={Signup} />
                <Route exact path={`${githubDeployPath}/viewUsers`} component={ViewUsers} />
                <Route path={`${githubDeployPath}""`} component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </div>

      </main>
      <CustomFooter />

    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isAuthorization: makeSelectIsAuthorization(),
});

function mapDispatchToProps(dispatch) {
  return {
    setAuthorToken: value => dispatch(setAuthorizationToken(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(App);
