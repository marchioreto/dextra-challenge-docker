import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import classes from '../../config/generalStyles.less';

const Home = () => (
  <Grid container justify="center">
    <Grid item xs={4}>
      <Paper elevation={3} className={classes.pagePaper}>
        <Grid container spacing={32}>
          <Grid item xs={12}>
            <Typography>DESAFIO DEXTRA</Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to="/lanches">
              <Button variant="contained" color="primary" size="large" fullWidth>Ver cardápio</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/pedidos">
              <Button variant="contained" color="primary" size="large" fullWidth>Fazer uma venda</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/vendas">
              <Button variant="contained" color="primary" size="large" fullWidth>Listar vendas realizadas</Button>
            </Link>            
          </Grid>
        </Grid>
      </Paper> 
      
    </Grid>
  </Grid>
);


export default Home;
