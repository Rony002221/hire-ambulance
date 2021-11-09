import React, { useState } from 'react';
import { Form,Button, Card } from 'react-bootstrap';
import Footer from '../footer/Footer';
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import initializeFireBase from '../firebase/FireBaseInit';

initializeFireBase();
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {


  const auth = getAuth();
  const [user, setUser] = useState({});



  ////////////////////////////// Function for Google Sign Up/////////////////
  const handleGoogleSignUp = ()=>{

    signInWithPopup(auth, provider)
    .then((result) => {
      
        const {displayName, email, photoURL} = result.user;

        const userInfo = {
          name : displayName,
          email : email,
          photo : photoURL,
        }

        setUser(userInfo);

        console.log(userInfo)

    }).catch((error) => {
      
    });

  }


    ////////////////////////////// Function for GitHub Sign Up/////////////////
    const handleGitHubSignUp = ()=>{

      signInWithPopup(auth, githubProvider)
      .then((result) => {
      
          const {displayName, email, photoURL} = result.user;

          const userInfo = {
            name : displayName,
            email : email,
            photo : photoURL,
          }

          setUser(userInfo);

          console.log(userInfo)

      }).catch((error) => {
      
      });

    }




    return (
        <div>
          
            <div className="container p-5 m-5 ">

            <h1> {user.name}</h1>
            <h1> {user.email}</h1>
            <Card style={{ width: '60%', background : 'rgb(238, 236, 234)' }} className = "m-auto">
              <Card.Body><Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Log In
                  </Button>
                </Form></Card.Body>

                <hr />
                <Button variant="dark" onClick = {handleGoogleSignUp} >Sign In With Google <i class="fab fa-google"></i></Button>
                <br />
                <Button variant="dark" onClick = {handleGitHubSignUp}>Sign In With GitHub <i class="fab fa-github"></i></Button>
                
            </Card>

            
            </div>

            <Footer/>
            
        </div>
    );
};

export default Login;