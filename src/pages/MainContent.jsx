import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import data from "./../data/review.json";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import EventNoteSharpIcon from "@material-ui/icons/EventNoteSharp";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import ProgressBar from "react-bootstrap/ProgressBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { Table, Flag } from 'semantic-ui-react'

const useStyles = makeStyles((theme) => ({
  search: {
    marginTop: "2vh",
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    backgroundColor: fade(theme.palette.common.black, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    left: "4vw",
    width: "20vw",
    minWidth: "15vw !important",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    //   width: '100%',
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  root: {
    width: "15vw",
    maxWidth: 360,
    marginTop: "3vh",
    marginLeft: "2vw",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(1),
  },
}));

const MainContent = () => {
  const [value, setValue] = React.useState(2);
  const classes = useStyles();
  const [change, setChange] = React.useState("");
  const [scale, setScale] = React.useState(-1);

  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const country=[
    {name:"Australia",
    code:'AU'},
    {name:"Germany",
    code:'DE'},
    {name:"Russia",
    code:'RU'},
    {name:"US",
    code:'US'},
    {name:"Japan",
    code:'JP'},
    {name:"India",
     code:'IN'},
    {name:"UK",
     code:'UK'},
    {name:"France",
     code:"FR"},
  ]


  const handleChangeCountry = (items) => {
   const filtereddataCountry = data.filter((item) => item.countryName == items);  
    console.log(filtereddataCountry);
  };

  const handleChangeVersion= (items) => {
   let filtereddataversions; 
    if (items == "0.1") {
      filtereddataversions= data.filter((item)=>item.version.includes("0.1"))
    }
    if (items == "1.0") {
      filtereddataversions= data.filter((item)=>item.version=="1.0" || item.version=="1" || item.version=="V1" || item.version=="v1.0" )
    }
    if (items == "1.1") {
      filtereddataversions= data.filter((item)=>item.version.includes("1.1"))
    }
    if (items == "1.2") {
      filtereddataversions= data.filter((item)=>item.version =="1.2" )
    }
    if (items == "1.3") {
      filtereddataversions= data.filter((item)=>item.version.includes("1.3"))
    }
    if (items == "1.2.1") {
      filtereddataversions= data.filter((item)=>item.version.includes("1.2.1"))
    }
    // if (event.target.value == 0) {
    //   todaydate();
    // }
    // if (event.target.value == 1) {
    //   todayweek();
    // }
    // if (event.target.value == 10) {
    //   todaymonth();
    // }
    // if (event.target.value == 100) {
    //   todayyear();
    // }
    console.log(data);
    console.log(filtereddataversions);
  };

  const handleChangeDate = (event) => {
    setScale(event.target.value);
    console.log(event.target.value);
    if (event.target.value == -1) {
      todayall();
    }
    if (event.target.value == 0) {
      todaydate();
    }
    if (event.target.value == 1) {
      todayweek();
    }
    if (event.target.value == 10) {
      todaymonth();
    }
    if (event.target.value == 100) {
      todayyear();
    }
  };
  const handleChangeRating = (items) => {
    const filtereddataRating = data.filter((item) => item.rating == items);
    console.log(filtereddataRating);
  };

  const todayall = () => {
    const datetoday = data;
    console.log(datetoday);
  };

  const todaydate = () => {
    var b = new Date();
    const datetoday = data.filter(
      (items) =>
        new Date(items.reviewDate).getFullYear() === b.getFullYear() &&
        new Date(items.reviewDate).getMonth() === b.getMonth() &&
        new Date(items.reviewDate).getDate() === b.getDate()
    );

    console.log(datetoday);
  };

  const todayweek = () => {
    var curr = new Date();
    console.log(curr);

    var a = curr.getDate();
    var b = curr.getDay();
    if (b == 0) {
      b = 7;
    }
    var firstday = new Date(curr.setDate(a - b + 1));
    var lastday = new Date(curr.setDate(a - b + 7));
    console.log(firstday);
    console.log(lastday);

    const datetoday = data.filter(
      (items) =>
        (new Date(items.reviewDate) >= firstday &&
          new Date(items.reviewDate) <= lastday) ||
        (new Date(items.reviewDate).getFullYear() === firstday.getFullYear() &&
          new Date(items.reviewDate).getMonth() === firstday.getMonth() &&
          new Date(items.reviewDate).getDate() === firstday.getDate()) ||
        (new Date(items.reviewDate).getFullYear() === lastday.getFullYear() &&
          new Date(items.reviewDate).getMonth() === lastday.getMonth() &&
          new Date(items.reviewDate).getDate() === lastday.getDate())
    );
    console.log(datetoday);
  };

  const todaymonth = () => {
    var curr = new Date();
    var FirstDay = new Date(curr.getFullYear(), curr.getMonth(), 1);
    var LastDay = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);
    console.log(FirstDay);
    console.log(LastDay);

    const datetoday = data.filter(
      (items) =>
        (new Date(items.reviewDate) >= FirstDay &&
          new Date(items.reviewDate) <= LastDay) ||
        (new Date(items.reviewDate).getFullYear() === FirstDay.getFullYear() &&
          new Date(items.reviewDate).getMonth() === FirstDay.getMonth() &&
          new Date(items.reviewDate).getDate() === FirstDay.getDate()) ||
        (new Date(items.reviewDate).getFullYear() === LastDay.getFullYear() &&
          new Date(items.reviewDate).getMonth() === LastDay.getMonth() &&
          new Date(items.reviewDate).getDate() === LastDay.getDate())
    );
    console.log(datetoday);
  };

  const todayyear = () => {
    var curr = new Date();
    var FirstDay = new Date(curr.getFullYear(), 0, 1);
    var LastDay = new Date(curr.getFullYear(), 11, 31);
    console.log(FirstDay);
    console.log(LastDay);

    const datetoday = data.filter(
      (items) =>
        (new Date(items.reviewDate) >= FirstDay &&
          new Date(items.reviewDate) <= LastDay) ||
        (new Date(items.reviewDate).getFullYear() === FirstDay.getFullYear() &&
          new Date(items.reviewDate).getMonth() === FirstDay.getMonth() &&
          new Date(items.reviewDate).getDate() === FirstDay.getDate()) ||
        (new Date(items.reviewDate).getFullYear() === LastDay.getFullYear() &&
          new Date(items.reviewDate).getMonth() === LastDay.getMonth() &&
          new Date(items.reviewDate).getDate() === LastDay.getDate())
    );
    console.log(datetoday);
  };

  const handleChange = (event) => {
    setChange(event.target.value);
    console.log(event.target.value);
  };

  const filteredDataSearch = data.filter(
    (item) =>
      item.appStoreName.toUpperCase().indexOf(change.toUpperCase()) !== -1 ||
      item.countryName.toUpperCase().indexOf(change.toUpperCase()) !== -1 ||
      item.reviewHeading.toUpperCase().indexOf(change.toUpperCase()) !== -1 ||
      item.reviewText.toUpperCase().indexOf(change.toUpperCase()) !== -1
  );
  console.log(filteredDataSearch);
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="flex-start"
      spacing={3}
    >
      <Grid item xs={4} sm={4}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            onChange={handleChange}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Grid>
      <Grid item xs={4} sm={4}>
        <FormControl
          variant="outlined"
          style={{
            marginLeft: "4.5vw",
            width: "15vw",
            height: "2vh",
            padding: "0",
            marginRight: "1vw",
            marginTop: "1vh",
          }}
        >
          <InputLabel id="demo-simple-select-outlined-label">Date</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={scale}
            IconComponent={KeyboardArrowDownIcon}
            onChange={handleChangeDate}
            label="Date"
          >
            <EventNoteSharpIcon style={{ marginLeft: "0.5em" }} />
            <MenuItem value={-1}>
              <em>all time</em>
            </MenuItem>
            <MenuItem value={0}>Today</MenuItem>
            <MenuItem value={1}>This Week</MenuItem>
            <MenuItem value={10}>This Month</MenuItem>
            <MenuItem value={100}>This Year</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid className={classes.root} item xs={4} sm={4}>
        <List component="nav" className={classes.root}>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Filter By Rating" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                onClick={() => handleChangeRating(5)}
                className={classes.nested}
              >
                {/* <ListItemIcon> */}

                <Rating name="read-only" value={5} readOnly />
                {data.filter((item)=>item.rating==5).length}

                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
              <ListItem
                button
                onClick={() => handleChangeRating(4)}
                className={classes.nested}
              >
                {/* <ListItemIcon> */}

                <Rating name="read-only" value={4} readOnly />
                {data.filter((item)=>item.rating==4).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
              <ListItem
                button
                onClick={() => handleChangeRating(3)}
                className={classes.nested}
              >
                <Rating name="read-only" value={3} readOnly />
                {data.filter((item)=>item.rating==3).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
              <ListItem
                button
                onClick={() => handleChangeRating(2)}
                className={classes.nested}
              >
                {/* <ListItemIcon> */}

                <Rating name="read-only" value={2} readOnly />
                {data.filter((item)=>item.rating==2).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
              <ListItem
                button
                onClick={() => handleChangeRating(1)}
                className={classes.nested}
              >
                {/* <ListItemIcon> */}

                <Rating name="read-only" value={1} readOnly />
                {data.filter((item)=>item.rating==1).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleClick2}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Filter By Version" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button  onClick={() => handleChangeVersion("0.1")} className={classes.nested}>
              0.1  {data.filter((item)=>item.version.includes("0.1")).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
              <ListItem button onClick={() => handleChangeVersion("1.2.1")} className={classes.nested}>
                {/* <ListItemIcon> */}
              1.2.1 {data.filter((item)=>item.version.includes("1.2.1")).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
              <ListItem button onClick={() => handleChangeVersion("1.0")} className={classes.nested}>
                1.0    {  data.filter((item)=>item.version=="1.0" || item.version=="1" || item.version=="V1" || item.version=="v1.0" ).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
              <ListItem button onClick={() =>handleChangeVersion("1.1")} className={classes.nested}>
                1.1   {data.filter((item)=>item.version.includes("1.1")).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
              <ListItem button onClick={() => handleChangeVersion("1.2")} className={classes.nested}>
                1.2   {data.filter((item)=>item.version =="1.2" ).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
              <ListItem button onClick={() => handleChangeVersion("1.3")} className={classes.nested}>
                1.3    {data.filter((item)=>item.version.includes("1.3")).length}
                {/* </ListItemIcon>
            <ListItemText primary="Starred" /> */}
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleClick3}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Filter By Country" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {country.map((item)=>(
              <ListItem button onClick={()=>(handleChangeCountry(item.name))} className={classes.nested}>             
    
                {item.name}  {data.filter((items) => items.countryName == item.name).length}
              </ListItem>))
              }       
            </List>
          </Collapse>
        </List>
      </Grid>
    </Grid>
  );
};

export default MainContent;
