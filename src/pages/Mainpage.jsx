import React from "react";
import ProdSort from "./ProdSort";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import MainContent from "./MainContent";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const MainPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProdSort />
	  <Divider style={{marginTop:"20px"}} variant="middle" />
	  <MainContent/>
    </div>
  );
};

export default MainPage;
