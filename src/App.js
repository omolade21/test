//import { Button, makeStyles } from '@material-ui/core';
//import { Person } from '@material-ui/icons';
import { Grid, makeStyles } from "@material-ui/core";
import Feeds from "./component/Feeds";
import LeftBar from "./component/LeftBar";
import NavBar from "./component/NavBar";
import RightBar from "./component/RightBar";

const useStyles = makeStyles((theme) => ({
  // button:{
  // color:"white",
  //backgroundColor: theme.palette.primary.main,
  // ...theme.myButton
  //},
  right:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      {/*  <Button
      variant='contained'
      size='large'
      startIcon={<Person />}
      className={classes.button}
      
      >        Material ui
  </Button>*/}

      <NavBar />
      <Grid container>
        <Grid item sm={2} XS = {2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
      <Feeds />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
