import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import numeral from 'numeral';

import IngredientList from '../IngredientList';


import classes from '../../config/generalStyles.less';

const BurgerCustom = ({
  addCustomBurger,
  addIngredient,
  cancelMakeCustom,
  customBurger,
  ingredientList,
}) => (
  <Grid container justify="center">
    <Grid item xs={10}>
      <Card className={classes.pagePaper} elevation={3}>
        <CardHeader
          title={customBurger.name}
          subheader={<span>R$ {numeral(customBurger.total).format('#,##0.00')}</span>}
        />
        <CardContent>
          {customBurger.ingredients.map((item, index) => <Typography key={index}>{item.name}</Typography>)}
        </CardContent>
        <CardContent>
          <Typography>Selecione os itens abaixo para personalizar o lanche</Typography>
          <IngredientList add={addIngredient} list={ingredientList} showButtons={true} />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="medium" onClick={() => addCustomBurger(customBurger)}>Adicionar para o pedido</Button>
          <Button variant="contained" color="primary" size="medium" onClick={() => cancelMakeCustom({})}>Cancelar</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);

BurgerCustom.defaultProps = {
  addCustomBurger: () => {},
  addIngredient: () => {},
  cancelMakeCustom: () => {},
  customBurger: {},
  ingredientList: [],
};

BurgerCustom.propTypes = {
  addCustomBurger: PropTypes.func,
  addIngredient: PropTypes.func,
  cancelMakeCustom: PropTypes.func,
  customBurger: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  ingredientList: PropTypes.arrayOf(PropTypes.object),
};

export default BurgerCustom;
