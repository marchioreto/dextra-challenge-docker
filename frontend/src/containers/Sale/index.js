/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as burgerActions from '../../redux/burger';
import * as ingredientActions from '../../redux/ingredient';
import * as saleActions from '../../redux/sale';
import * as burgerSelectors from '../../selectors/burger';
import * as saleSelectors from '../../selectors/sale';
import * as setup from '../../config/setup';

import SalePanel from '../../components/SalePanel';


class Sale extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getBurgersList();
    actions.getIngredientsList();
    setup.localeConfiguration();
  }

  render() {
    const {
      actions, burger, ingredient, sale, totalSale,
    } = this.props;
    return (
      <SalePanel
        addBurger={burgerSelected => actions.addBurger(burgerSelected)}
        removeBurger={(array, item) => actions.removeBurger(array, item)}
        addCustomBurger={customBurger => actions.addCustomBurgerToSale(customBurger)}
        addIngredient={ingredientSelected => actions.addIngredientToBurger(ingredientSelected)}
        customBurger={sale.custom}
        makeCustom={customBurger => actions.makeCustomBurger(customBurger)}
        cancelMakeCustom={() => actions.resetCustomBurger({})}
        burgerList={burger.list}
        ingredientList={ingredient.list}
        saleItens={sale.itens}
        saveSale={() => actions.saveRequest({ itens: sale.itens, total: totalSale })}
        cancelSale={() => actions.cancelSale()}
        totalSale={totalSale}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: {
      ...state.burger,
      list: burgerSelectors.calculateBurgerPrice(state),
    },
    ingredient: state.ingredient,
    sale: {
      ...state.sale,
      itens: saleSelectors.calculateCustomBurgerPrice(state),
    },
    totalSale: saleSelectors.calculateTotalSale(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...burgerActions,
      ...ingredientActions,
      ...saleActions,
    }, dispatch),
  };
};

Sale.defaultProps = {
  actions: {},
  burger: {},
  ingredient: {},
  sale: {},
  totalSale: 0,
};

Sale.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  burger: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  ingredient: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  sale: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  totalSale: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sale);
