import React, { Component, useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import data from "./../data/review.json";
import HeightIcon from "@material-ui/icons/Height";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    marginLeft: "4vw",
    width: "50vw",
    maxWidth: "400px",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const BootstrapInputSort = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    width: "15vw",
    maxWidth: "150px",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const ProdSort = (props) => {
  const classes = useStyles();
  const [app, setApp] = React.useState("All");
  const [sort, setSort] = React.useState("newest");

  const senddatatoparent = (item) => {
    props.parentCallback(item);
  };

  const handleChange = (event) => {
    setApp(event.target.value);
    filter(event.target.value);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
    filter1(event.target.value);
  };

  const filter = (item1) => {

    const filterdata =
      item1 == "All" ? data : data.filter((item) => item1 == item.appID);

    
    const filterdataSort =
      sort == "newest"
        ? filterdata.sort(function (a, b) {
            return new Date(b.reviewDate) - new Date(a.reviewDate);
          })
        : filterdata.sort(function (a, b) {
            return new Date(a.reviewDate) - new Date(b.reviewDate);
          });
   
    senddatatoparent(filterdataSort);
  };

  const filter1 = (item1) => {
    const filterdata =
      app == "All" ? data : data.filter((item) => app == item.appID);

    const filterdataSort =
      item1 == "newest"
        ? filterdata.sort(function (a, b) {
            return new Date(b.reviewDate) - new Date(a.reviewDate);
          })
        : filterdata.sort(function (a, b) {
            return new Date(a.reviewDate) - new Date(b.reviewDate);
          });
    senddatatoparent(filterdataSort);
  };

  // useEffect((props) => {
  //   props.parentCallback(filterdataSort);

  // },[filterdataSort]);
  // sendtoParent(filterdataSort);

  return (
    <Grid container spacing={3}>
      <Grid item xs={8} sm={8}>
        <FormControl className={classes.margin}>
          <InputLabel
            style={{ marginLeft: "4vw" }}
            id="demo-customized-select-label"
          >
            select products
          </InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={app}
            IconComponent={KeyboardArrowDownIcon}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value="All">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"com.myntra"}>Myntra</MenuItem>
            <MenuItem value={"com.amazon"}>Amazon</MenuItem>
            <MenuItem value={"com.google"}>Google</MenuItem>
            <MenuItem value={"com.flipkart"}>Flipkart</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2} sm={2}>
        <FormControl className={classes.margin}>
          <InputLabel id="demo-customized-select-label">sorting</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={sort}
            onChange={handleSort}
            IconComponent={HeightIcon}
            input={<BootstrapInputSort />}
          >
            <MenuItem value={"newest"}>
              <em>Newest First</em>
            </MenuItem>
            <MenuItem value={"oldest"}>Oldest First</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2} sm={2}>
        <FormControl className={classes.margin}>
          <InputLabel id="demo-customized-select-label">translation</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={"English"}
            IconComponent={HeightIcon}
            input={<BootstrapInputSort />}
          >
            <MenuItem value={"English"}>
              <em>English</em>
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ProdSort;
