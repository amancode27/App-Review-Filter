import React, { Component, useState, useEffect } from "react";
import ProdSort from "./ProdSort";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import MainContent from "./MainContent";
import data from "./../data/review.json";
import Content from "./Content.jsx"
import Grid from "@material-ui/core/Grid";
import './../index.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const [info, setinfo] = useState(data);
  const [infofinal,setinfofinal] =useState(data)

  const callback = (count) => {
    setinfo(count);
    console.log(count);
    setinfofinal(count);
    // do something with value in parent component, like save to state
}

const callback1 = (count1) =>
{ 
 console.log(count1);
 setinfofinal(count1);

// 

}
console.log(info)

  return (
    <div id={"body"}className={classes.root}>
    <ProdSort  parentCallback={callback} />
	  <Divider style={{marginTop:"20px"}} variant="middle" />
    <Grid container spacing={3}>
    <Grid item xs={4} sm={4} md={4}>
	  <MainContent info={info} parentCallback1={callback1} />
    </Grid>
    <Grid item xs={8} sm={8} md={8}>
    <Content  info2={infofinal}/>
    </Grid>

    </Grid>
    </div>
  
  );
};

export default MainPage;
