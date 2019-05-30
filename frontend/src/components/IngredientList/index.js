import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import numeral from 'numeral';

import classes from '../../config/generalStyles.less';

const IngredientList = ({
  add,
  list,
  showButtons,
}) => (
  <Grid container justify="center" spacing={8}>
    <Grid item xs={12} sm={12}>
      <Paper elevation={3} className={classes.pagePaper}>
        <List component="nav">
          {
            list.map(itm => (
              <ListItem button key={itm.name}>
                <ListItemText
                  primary={itm.name}
                  secondary={numeral(itm.price).format('#,##0.00')}
                />
                {
                  showButtons && (
                    <ListItemIcon className={classes.iconButtonArea} onClick={() => add(itm)}>
                      <Tooltip title="ADICIONAR INGREDIENTE">
                        <IconButton color="inherit"><i className="fas fa-plus" /></IconButton>
                      </Tooltip>
                    </ListItemIcon>
                  )
                }
                
              </ListItem>
            ))
          }
        </List>
      </Paper>
    </Grid>
  </Grid>
);

IngredientList.defaultProps = {
  add: () => {},
  list: [],
  showButtons: false,
};

IngredientList.propTypes = {
  add: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  showButtons: PropTypes.bool,
};

export default IngredientList;
