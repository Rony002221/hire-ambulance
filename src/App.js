import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import About from './components/about/About';
import Login from './components/login/Login';
import Ragistration from './components/login/Registration';
import Error from './components/404/_404';
import Details from './components/details/Details';
import initializeFireBase from './firebase/FireBaseInit';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './private_route/PrivateRoute';
import Contact from './components/contactUs/Contact';


initializeFireBase();
function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>

            <NavBar></NavBar>

            <Switch>
                
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/home">
                      <Home />
                    </Route>
                    <Route exact path="/about">
                      <About />
                    </Route>
                    <Route exact path="/contact">
                      <Contact/>
                    </Route>
                    
                    <Route exact path="/ragistration">
                      <Ragistration/>
                    </Route>
                    


                    <Route exact path="/login">
                      <Login></Login>
                    </Route>
                    
                    <PrivateRoute exact path="/details/:id">
                      <Details />
                    </PrivateRoute>
                    
                    
                    <Route  path="*">
                      <Error />
                    </Route>
                
                
              </Switch>


        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
