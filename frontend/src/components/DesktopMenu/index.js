import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import classes from './styles.less';

const DesktopMenu = () => (
  <div>
    <Tooltip title="HOME">
      <IconButton color="inherit">
        <Link className={classes.linkMenuDesktop} to="/"><i className="fas fa-home" /></Link>
      </IconButton>
    </Tooltip>
    <Tooltip title="INGREDIENTES">
      <IconButton color="inherit">
        <Link className={classes.linkMenuDesktop} to="/ingredientes"><i className="fas fa-pepper-hot" /></Link>
      </IconButton>
    </Tooltip>
    <Tooltip title="LANCHES">
      <IconButton color="inherit">
        <Link className={classes.linkMenuDesktop} to="/lanches"><i className="fas fa-hamburger" /></Link>
      </IconButton>
    </Tooltip>
    <Tooltip title="PEDIDOS">
      <IconButton color="inherit">
        <Link className={classes.linkMenuDesktop} to="/pedidos"><i className="fas fa-cart-plus" /></Link>
      </IconButton>
    </Tooltip>
    <Tooltip title="DASHBOARD">
      <IconButton color="inherit">
        <Link className={classes.linkMenuDesktop} to="/dashboard"><i className="fas fa-chart-line" /></Link>
      </IconButton>
    </Tooltip>
  </div>
);

export default DesktopMenu;
