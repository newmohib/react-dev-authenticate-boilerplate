/**
 *
 * CustomFooter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import StickyFooter from 'react-sticky-footer';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCustomFooter from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import SocialFooterButton from './socialFooterButton';

export function CustomFooter() {
  useInjectReducer({ key: 'customFooter', reducer });
  useInjectSaga({ key: 'customFooter', saga });

  return (
    <footer className="footer mt-auto py-3">
    <div className="container">
      <span className="text-muted">Place sticky footer content here.</span>
    </div>
  </footer>
  );
}

CustomFooter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  customFooter: makeSelectCustomFooter(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CustomFooter);
