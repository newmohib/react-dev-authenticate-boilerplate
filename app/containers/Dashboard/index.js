/**
 *
 * Dashboard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Dashboard() {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  const sslinitial = () => {
    const loader = function() {
      const script = document.createElement('script');
      const tag = document.getElementsByTagName('script')[0];
      script.src = `https://sandbox.sslcommerz.com/embed.min.js?${Math.random()
        .toString(36)
        .substring(7)}`;
      tag.parentNode.insertBefore(script, tag);
    };

    window.addEventListener
      ? window.addEventListener('load', loader, false)
      : window.attachEvent('onload', loader);
  };
  sslinitial();
  const paymentData = [
    {
      store_id: 'brain5d91a58f56caf',
      store_passwd: 'brain5d91a58f56caf@ssl',
      total_amount: 100,
      currency: 'BD',
      tran_id: 'REF1231354',
      success_url: 'https://newmohib.github.io',
      fail_url: 'https://newmohib.github.io',
      cancel_url: 'https://newmohib.github.io',
      shipping_method: 'Courier',
      num_of_item: 2,
      product_name: 'Computer.',
      product_category: 'Electronic',
      emi_option: 1,
      product_profile: 'general',
      cus_name: 'Customer Name',
      cus_email: 'cust@yahoo.com',
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: '01711111111',
      cus_fax: '01711111111',
      ship_name: 'Customer Name',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
      multi_card_name: 'mastercard',
      value_a: 'ref001_A',
      value_b: 'ref002_B',
      value_c: 'ref003_C',
      value_d: 'ref004_D',
    },
  ];
   return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>

      <div class="container">
      <div class="row">
          <div class="col-12">
              <h1 class="mt-5">Deshbord</h1>
              <p class="lead">Pin a Deshbord to the bottom of the viewport in desktop browsers with this custom HTML and CSS.</p>
          </div>
      </div>
  </div>
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
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
)(Dashboard);
