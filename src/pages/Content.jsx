import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import WifiIcon from "@material-ui/icons/Wifi";
import GetAppIcon from "@material-ui/icons/GetApp";
import CodeIcon from "@material-ui/icons/Code";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import Paginations from "./Pagination";
import Rating from "@material-ui/lab/Rating";
import "./../index.css";
import Australia from "./../img/AU.png";
import Germany from "./../img/de.png";
import France from "./../img/FR.png";
import India from "./../img/IN.png";
import Japan from "./../img/JP.png";
import Russia from "./../img/RU.png";
import UK from "./../img/UK.png";
import US from "./../img/US.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight: 30,
    marginTop: 4,
    padding: 20,
  },
  root1: {
    marginTop: 4,
    marginRight: 130,
    position: "relative",
    right: 100,
  },
  right: {
    marginLeft: "auto",
  },
  right1: {
    marginLeft: "auto",
    marginRight: 0,
    position: "relative",
    left: 180,
  },
  left: {
    position: "relative",
    right: 100,
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: 10,
    marginLeft: 10,
    width: 1100,
    maxWidth: 1000,
  },
}));

const Content = (props) => {
  const classes = useStyles();
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.info2.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Grid>
      <Grid container>
        <Grid
          container
          className={classes.root}
          alignItems="center"
          spacing={3}
        >
          <Grid>
            <Typography className={classes.left} variant="h6" component="h6">
              Viewing {indexOfFirstPost}-{indexOfLastPost} of{" "}
              {props.info2.length} Reviews
            </Typography>
          </Grid>
          <Grid className={classes.right1}>
            <Button
              variant="outlined"
              color="white"

              className={classes.button}
              startIcon={<NotificationsIcon />}
              endIcon={<ArrowDropDownIcon />}
            >
              Create Alert
            </Button>
          </Grid>
          <Grid className={classes.right}>
            <Button
              variant="outlined"
              color="white"
              className={classes.button}
              startIcon={<WifiIcon />}
              endIcon={<GetAppIcon />}
            >
              <CodeIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.root1} alignItems="center">
          {currentPosts.map((item) => (
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              sm={8}
              xs={8}
            >
              <Paper elevation={6} className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid xs={12} sm container>
                    <Grid item xs container direction="column" spacing={1}>
                      <Grid container>
                        <Grid item xs>
                          <span class="dot"></span>
                        </Grid>
                        <Grid item xs>
                          <Button
                            variant="contained"
                            style={{
                              position: "relative",
                              right: "8em",
                              top: "1.1em",
                              fontWeight: "bold",
                            }}
                            gutterBottom
                          >
                            {item.appStoreName}
                          </Button>
                        </Grid>
                        <Grid item xs>
                          <Typography
                            style={{
                              right: "9em",
                              top: "0.3em",
                              position: "relative",
                            }}
                            variant="h6"
                            gutterBottom
                          >
                            {item.reviewHeading}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography
                            style={{
                              right: 200,
                              top: "0.5em",
                              position: "relative",
                            }}
                            variant="body2"
                            color="textSecondary"
                          >
                            <Rating
                              name="read-only"
                              value={item.rating}
                              readOnly
                            />
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Button
                            style={{
                              marginLeft: 100,
                              position: "relative",
                              top: "15px",
                            }}
                            variant="outlined"
                          >
                            Translated
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12} sm container>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{
                        position: "relative",
                        top: "0.3em",
                      }}
                    >
                      {item.reviewText}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid xs={12} sm container>
                    <Grid item xs container direction="column" spacing={1}>
                      <Grid container>
                        <Grid item xs>
                          <Typography gutterBottom style={{fontWeight:"900"}}variant="subtitle1">
                           &nbsp;&nbsp;&nbsp;by {item.reviewUserName}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography style={{ position: "relative", right: "5em",fontWeight:"900" }} variant="subtitle1" gutterBottom>
                            {item.reviewDate.slice(
                              0,
                              item.reviewDate.length - 9
                            )}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography style={{ position: "relative", right: "8.5em",fontWeight:"900"} }variant="subtitle1">
                            {item.version}
                          </Typography>
                        </Grid>

                        <Grid item xs>
                          <Typography  style={{ position: "relative", right: "15em" ,fontWeight:"900"}} variant="subtitle1">
                            <img src= {item.countryName=="Australia"?Australia:item.countryName=="France"?France:
                            item.countryName=="India"?India:item.countryName=="UK"?UK:item.countryName=="US"?US:
                            item.countryName=="Germany"?Germany:item.countryName=="Japan"?
                            Japan:item.countryName=="Russia"?Russia:null} width="18" style={{borderRadius:"2px"}}
                            height="12"/>  <span style={{marginRight:`.5em`, display:"inline-block"}}>&nbsp;</span>  
                            {item.countryName}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography
                            style={{ position: "relative", left: "10em" }}
                            variant="h6"
                          >
                            reply
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography
                            style={{ position: "relative", left: "5em" }}
                            variant="h6"
                          >
                            share  <KeyboardArrowDownIcon style={{position:"relative",top:".28em",right:".12em"}}/>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Paginations
        postsPerPage={postsPerPage}
        totalPosts={props.info2.length}
        paginate={paginate}
      />
    </Grid>
  );
};

export default Content;
