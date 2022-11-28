import { Container, makeStyles } from '@material-ui/core';
import React from 'react'



const useStyles = makeStyles((theme)=> ({
    container: {
   
        paddingTop: theme.spacing(10),
      }
}));
const Feeds = () => {
    const classes = useStyles();
  return (
    <Container className={classes.container}>FEEDS</Container>
  )
}

export default Feeds