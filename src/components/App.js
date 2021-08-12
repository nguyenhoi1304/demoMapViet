import React from "react";
import '../styles/App.css';
import Hotline from "./hotline"
import Demomapsapi from "./demomapsapi/demomapsapi";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Box } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";



const App =() => {
    return (
        <Router>
           
            <Header/>
            <Switch>
            <Route exact path="/"><Demomapsapi></Demomapsapi></Route>
            <Route exact path="/demomapsapi"><Demomapsapi></Demomapsapi></Route> 
            <Route exact path="/hotline" ><Hotline></Hotline></Route>
            </Switch>
            <Box>
            <Footer></Footer>
            </Box>
          
          
      </Router>
    )
}

export default App;