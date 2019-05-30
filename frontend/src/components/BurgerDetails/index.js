import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import classes from './styles.less';

const BurgerDetails = ({
  ingredients,
  price,
}) => (
  <span>
    <span className={classes.burgerPrice}>R$ {numeral(price).format('#,##0.00')}</span>
    {ingredients.map(ingredient => <span key={ingredient.name}>{ingredient.name}&nbsp;</span>)}
  </span>
);

BurgerDetails.defaultProps = {
  ingredients: [],
  price: 0,
};

BurgerDetails.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
  price: PropTypes.number,
};

export default BurgerDetails;
