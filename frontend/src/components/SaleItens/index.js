import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import numeral from 'numeral';

import classes from '../../config/generalStyles.less';
import classesSalesItens from './styles.less';

const SaleItens = ({
  itens,
  cancelSale,
  removeBurger,
  saveSale,
  totalSale,
}) => (
  <Grid container justify="center">
    <Grid item xs={12}>
      <Paper elevation={3} className={classes.pagePaper}>
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <Typography className={classesSalesItens.saleTotal}>
              Total do Pedido
              <br />
              R$ {numeral(totalSale).format('#,##0.00')}
            </Typography>
          </Grid>
          {
            itens.length > 0 && (
              <Grid container item xs={4} spacing={16}>
                <Grid item xs={6} className={classesSalesItens.saleIcons}>
                  <Tooltip title="CANCELAR VENDA" onClick={cancelSale}>
                    <IconButton color="inherit"><i className="fas fa-times-circle" /></IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={6} className={classesSalesItens.saleIcons}>
                  <Tooltip title="FINALIZAR VENDA" onClick={saveSale}>
                    <IconButton color="inherit"><i className="fas fa-check-circle" /></IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            )
          }
          <Grid item xs={12}>
            <hr />
          </Grid>
        </Grid>
        {
          itens.map((item, index) => (
            <Card elevation={0} key={index}>
              <CardHeader
                className={classesSalesItens.itemHeader}
                title={item.name}
                subheader={(
                  <div className={classes.iconButtonArea}>
                    <span>R$ {numeral(item.total).format('#,##0.00')}</span>&nbsp;&nbsp;&nbsp;
                    <Tooltip title="EXCLUIR ITEM" onClick={() => removeBurger(itens, item)}>
                      <IconButton color="inherit"><i className="fas fa-trash"/></IconButton>
                    </Tooltip>
                  </div>
                )}
              />
              <CardContent className={classesSalesItens.itemContent}>
                {
                  item.ingredients.map((itm, idx) => <Typography key={idx}>{itm.name}</Typography>)
                }
              </CardContent>
              <hr />
            </Card>
          ))
        }
      </Paper>
    </Grid>
  </Grid>
);

SaleItens.defaultProps = {
  cancelSale: () => {},
  itens: [],
  removeBurger: () => {},
  saveSale: () => {},
  totalSale: 0,
};

SaleItens.propTypes = {
  cancelSale: PropTypes.func,
  itens: PropTypes.arrayOf(PropTypes.object),
  removeBurger: PropTypes.func,
  saveSale: PropTypes.func,
  totalSale: PropTypes.number,
};

export default SaleItens;
