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
import Typography from '@material-ui/core/Typography';

import BurgerDetails from '../BurgerDetails';
import classes from '../../config/generalStyles.less';

const BurgerList = ({
  add,
  list,
  makeCustom,
  showButtons,
}) => (
  <Grid container justify="center">
    <Grid item xs={11} sm={10}>
      <Paper elevation={3} className={classes.pagePaper}>
        {
          showButtons === false ? (
            <Typography>Opções do cardápio</Typography>
          ) : (
            <Typography>Selecione um item do cardápio ou personalize com os ingredientes desejados.</Typography>
          )
        }
        
        <List component="nav">
          {
            list.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText
                  primary={item.name}
                  secondary={<BurgerDetails ingredients={item.ingredients} price={item.total} />}
                />
                {
                  showButtons && (
                    <div>
                      <ListItemIcon className={classes.iconButtonArea} onClick={() => add(item)}>
                        <Tooltip title="ADICIONAR LANCHE PADRÃO">
                          <IconButton color="inherit"><i className="fas fa-plus" /></IconButton>
                        </Tooltip>
                      </ListItemIcon>
                      <ListItemIcon className={classes.iconButtonArea} onClick={() => makeCustom(item)}>
                        <Tooltip title="PERSONALIZAR LANCHE">
                          <IconButton color="inherit"><i className="fas fa-pen" /></IconButton>
                        </Tooltip>
                      </ListItemIcon>
                    </div>
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

BurgerList.defaultProps = {
  add: () => {},
  list: [],
  makeCustom: () => {},
  showButtons: false,
};

BurgerList.propTypes = {
  add: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  makeCustom: PropTypes.func,
  showButtons: PropTypes.bool,
};

export default BurgerList;
