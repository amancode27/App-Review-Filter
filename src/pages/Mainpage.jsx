import React, { Component, useState, useEffect } from "react";
import ProdSort from "./ProdSort";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import MainContent from "./MainContent";
import data from "./../data/review.json"


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
// 

}
console.log(info)

  return (
    <div className={classes.root}>
    <ProdSort  parentCallback={callback} />
	  <Divider style={{marginTop:"20px"}} variant="middle" />
	  <MainContent info={info} parentCallback1={callback1} />
    </div>
  );
};

export default MainPage;
