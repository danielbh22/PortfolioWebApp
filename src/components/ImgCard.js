import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    // minWidth: 545,
    margin: '20px'
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Oswald', 
    color: '#2f575d' 
  },
  description: {

  }
});

export default function ImgCardComp({Project ,checked}) {
  const classes = useStyles();

  return (
    <Collapse in={checked} { ...(checked ? {timeout :1000 }: {})}>
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={Project.imageUrl}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {Project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                {Project.description}
            </Typography>
            </CardContent>
        </CardActionArea>
          <CardActions>
          <Button size="small" color="primary">
            <a href={Project.url} >GitHub Link</a>
            
          </Button>
        </CardActions>
        </Card>
    </Collapse>
    
  );
}
