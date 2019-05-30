import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import DesktopMenu from '../DesktopMenu';

const styles = theme => ({
  titleApp: {
    color: '#fff',
    textDecoration: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

function Header({ classes }) {
  return (
    <div>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6">
            <Link className={classes.titleApp} to="/">LANCHES</Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <DesktopMenu />
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
