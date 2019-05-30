import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import numeral from 'numeral';
import moment from 'moment';

import classes from '../../config/generalStyles.less';


const SaleHistory = ({
  list,
}) => (
  <Grid container justify="center">
    <Grid item xs={11} sm={10}>
      <Paper elevation={3} className={classes.pagePaper}>
        <Typography>Histórico das vendas</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nr. venda</TableCell>
              <TableCell>Data venda</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Lanches da venda</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              list.map(sale => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.id}</TableCell>
                  <TableCell>{moment(sale.saleDate).format('DD/MM/YYYY HH:mm:ss')}</TableCell>
                  <TableCell>{numeral(sale.total).format()}</TableCell>
                  <TableCell>
                    {
                      sale.itens.map((burger, index) => <div key={index}>{burger.name}</div>)
                    }
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  </Grid>
);

SaleHistory.defaultProps = {
  list: [],
};

SaleHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default SaleHistory;
