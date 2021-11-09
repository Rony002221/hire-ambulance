import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import Service from './components/service/Service';
import About from './components/about/About';
import Login from './components/login/Login';
import Ragistration from './components/login/Registration';
import Error from './components/404/_404';
import Details from './components/details/Details';
import initializeFireBase from './components/firebase/FireBaseInit';


initializeFireBase();
function App() {
  return (
    <div className="App">
      
      <Router>

<NavBar></NavBar>

<Switch>
    
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/service">
      <Service/>
    </Route>
    
    <Route path="/ragistration">
      <Ragistration/>
    </Route>
    


    <Route path="/login">
      <Login></Login>
    </Route>
    
    <Route path="/details/:id">
      <Details />
    </Route>
    
    
    <Route exact path="*">
      <Error />
    </Route>
    
  </Switch>


</Router>
      
    </div>
  );
}

export default App;
