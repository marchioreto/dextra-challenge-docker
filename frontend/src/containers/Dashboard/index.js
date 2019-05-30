import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as saleActions from '../../redux/sale';
import * as setup from '../../config/setup';

import SaleHistory from '../../components/SaleHistory';

class Dashboard extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getSaleHistory();
    setup.localeConfiguration();
  }

  render() {
    const { sale } = this.props;
    return (
      <SaleHistory list={sale.history} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sale: state.sale,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(saleActions, dispatch),
  };
};

Dashboard.defaultProps = {
  actions: {},
  sale: {},
};

Dashboard.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  sale: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
