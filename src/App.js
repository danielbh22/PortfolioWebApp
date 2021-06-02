import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import HeaderComp from './components/Header';
import MyWorksComp from './components/MyProjects';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + "/bg.jpg"})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <HeaderComp/>
      <MyWorksComp/>
     
    </div>
  );
}

export default App;
