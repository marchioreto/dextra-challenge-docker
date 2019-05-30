import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as burgerActions from '../../redux/burger';
import * as burgerSelectors from '../../selectors/burger';
import * as setup from '../../config/setup';

import BurgerList from '../../components/BurgerList';

class Burger extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getBurgersList();
    setup.localeConfiguration();
  }

  render() {
    const { burger } = this.props;
    return (
      <BurgerList showButtons={false} list={burger.list} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: {
      ...state.burger,
      list: burgerSelectors.calculateBurgerPrice(state),
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(burgerActions, dispatch),
  };
};

Burger.defaultProps = {
  actions: {},
  burger: {},
};

Burger.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  burger: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
