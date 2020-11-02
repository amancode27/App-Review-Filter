import React from "react";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import "./../index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
	  marginTop: theme.spacing(4),
	
	},
	
  },
}));

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const classes = useStyles();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Grid container className={classes.root}>
      <Grid item>
      <Pagination style={{positon:'relative',left:"20em"}}count={Math.ceil(totalPosts / postsPerPage)} onClick={(e) => paginate(e.target.outerText)}  hidePrevButton hideNextButton variant="outlined" color="primary" />

      </Grid>
    </Grid>
  );
};

export default Paginations;
