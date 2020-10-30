import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './pages/Mainpage';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
