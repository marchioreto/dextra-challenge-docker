import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ingredientActions from '../../redux/ingredient';
import * as setup from '../../config/setup';

import IngredientList from '../../components/IngredientList';


class Ingredient extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getIngredientsList();
    setup.localeConfiguration();
  }

  render() {
    const { ingredient } = this.props;
    return (
      <IngredientList list={ingredient.list} showButtons={false} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredient: state.ingredient,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ingredientActions, dispatch),
  };
};

Ingredient.defaultProps = {
  actions: {},
  ingredient: {},
};

Ingredient.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  ingredient: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
