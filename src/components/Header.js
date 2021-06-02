import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: ' 100vh',
    fontFamily : 'Oswald'
  },
  appbar:{
    background: 'none',
    fontFamily : 'Oswald'
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto'
  },
  appbarTitle:{
    flexGrow : '1',
    fontSize: '2rem'
  },
  icon:{
      color :'#000',
      fontSize: '2rem',
  },
  colorText:{
      color:"#658b6f"
  },
  container:{
    textAlign: 'center',
  },
  text:{
    color:"#fff",
    fontSize: '3rem'
  },
  goDown:{
    color:'#658b6f',
    fontSize: '3rem'
  }
}));

function HeaderComp() {
  const classes = useStyles();
  const [checked,setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, [])
  return (
    <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle} >
                    Daniel <span className={classes.colorText}>Portfolio.</span>
                    </h1>
                <IconButton>
                    <MenuIcon className={classes.icon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Collapse in={checked} { ...(checked ? {timeout :1000 }: {})} collapsedHeight={50} >
        <div className={classes.container}>
            <h1 className={classes.text}>
                Welcome to <br/> Daniel <span className={classes.colorText}>Portfolio.</span>
            </h1>
            <Scroll to="my-Projects" smooth={true}>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown}/>
                </IconButton>
            </Scroll>
        </div>
        </Collapse>

    </div>
  );
}

export default HeaderComp;
