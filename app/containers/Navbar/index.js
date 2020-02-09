/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import { DropdownButton ,Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNavbar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { sidebarOpenToAction } from '../SideBar/actions';

export function Navbar(props) {
  useInjectReducer({ key: 'navbar', reducer });
  useInjectSaga({ key: 'navbar', saga });

  const githubDeployPath = process.env.GITHUB_DEPLOY_PATH ? process.env.GITHUB_DEPLOY_PATH : '';

  return (
    <div className="shadow bg-white rounded">
      <div className="navbar navbar-light bg-light p-2 ">
        <div className="float-left">
          <button
            className="btn btn-light btn-md"
            onClick={() => props.sidebarOpenAction(true)}
          >
            <FontAwesomeIcon icon={faAlignJustify} size="lg" />
          </button>
          <NavLink className="btn btn-light text-center mx-2 mt-1" to={`${githubDeployPath}/dashboard`}>Home</NavLink>
          
        </div>
        <div className="float-right">
          <DropdownButton variant="light" id="dropdown-basic" title="User Profiles" className="mr-4">
            <Dropdown.Item className="text-center" ><NavLink className="text-center text-decoration-none text-dark" to={`${githubDeployPath}/`}>Sign in</NavLink></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-center" ><NavLink className="text-center text-decoration-none text-dark" to={`${githubDeployPath}/signup`}>Sign Up</NavLink></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-center" ><NavLink className="text-center text-decoration-none text-dark" to={`${githubDeployPath}/logout`}>Logout</NavLink></Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navbar: makeSelectNavbar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    sidebarOpenAction: value => dispatch(sidebarOpenToAction(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Navbar);
