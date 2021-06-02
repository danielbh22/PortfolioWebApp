import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Projects from '../static/Projects'
import utils from '../projectsUtils';
import ImgCardComp from './ImgCard';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root:{

    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   // [theme.breakpoints.down('md')]: {
    //  flexDirection: 'column',
    //},

  }
}));

function MyProjectsComp() {
  const classes = useStyles();

  const checked = useWindowPosition('header');
  const [projects, setProjects] = useState([]);

  useEffect(()=>
  {
    const getData = async () => 
    {
      let resp = await utils.getProjects();
      setProjects(resp.data);
    };
    getData()
  },[]);



  return (
    <div className={classes.root} id="my-Projects">

      {
        projects.map(item =>
          {
            return(
              <ImgCardComp key={item._id} Project={item} checked={checked}/>
            )
          })
      }
        
    </div>
  );
}

export default MyProjectsComp;
