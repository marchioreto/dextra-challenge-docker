import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import BurgerList from '../BurgerList';
import SaleItens from '../SaleItens';
import BurgerCustom from '../BurgerCustom';

const SalePanel = ({ 
  addBurger,
  removeBurger,
  addCustomBurger,
  addIngredient,
  burgerList,
  cancelMakeCustom,
  customBurger,
  ingredientList,
  makeCustom,
  saleItens,
  cancelSale,
  saveSale,
  totalSale,
}) => (
  <Grid container justify="center" spacing={32}>
    <Grid item xs={11} sm={7}>
      {
        (Object.entries(customBurger).length > 0) && (
          <BurgerCustom
            addCustomBurger={addCustomBurger}
            addIngredient={addIngredient}
            cancelMakeCustom={cancelMakeCustom}
            customBurger={customBurger}
            ingredientList={ingredientList}
          />
        )
      }
      {
        (Object.entries(customBurger).length === 0) && (
          <BurgerList
            add={addBurger}
            makeCustom={makeCustom}
            list={burgerList}
            showButtons={true}
          />
        )
      }
    </Grid>    
    <Grid item xs={11} sm={3}>
      <SaleItens
        itens={saleItens}
        totalSale={totalSale}
        removeBurger={removeBurger}
        cancelSale={cancelSale}
        saveSale={saveSale}
      />
    </Grid>
  </Grid>
);

SalePanel.defaultProps = {
  addBurger: () => {},
  removeBurger: () => {},
  addCustomBurger: () => {},
  addIngredient: () => {},
  burgerList: [],
  cancelMakeCustom: () => {},
  customBurger: {},
  ingredientList: [],
  makeCustom: () => {},
  saleItens: [],
  cancelSale: () => {},
  saveSale: () => {},
  totalSale: 0,
};

SalePanel.propTypes = {
  addBurger: PropTypes.func,
  removeBurger: PropTypes.func,
  addCustomBurger: PropTypes.func,
  addIngredient: PropTypes.func,
  burgerList: PropTypes.arrayOf(PropTypes.object),
  cancelMakeCustom: PropTypes.func,
  customBurger: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  ingredientList: PropTypes.arrayOf(PropTypes.object),
  makeCustom: PropTypes.func,
  saleItens: PropTypes.arrayOf(PropTypes.object),
  cancelSale: PropTypes.func,
  saveSale: PropTypes.func,
  totalSale: PropTypes.number,
};
export default SalePanel;
