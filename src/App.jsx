import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './pages/Mainpage';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme= createMuiTheme({
  
  typography: {
    fontFamily:'Josefin Sans',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
      <MuiThemeProvider theme={theme}>
        <Route exact path="/" render={() => <MainPage />} />
        </MuiThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
