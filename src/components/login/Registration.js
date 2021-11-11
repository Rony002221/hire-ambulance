import React, { useState } from 'react';
import { Card, Form,Button } from 'react-bootstrap';
import Footer from '../footer/Footer';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeFireBase from '../../firebase/FireBaseInit';

initializeFireBase();
const Registration = () => {

  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const getEmail = (e)=>{

    setEmail(e.target.value);

  }
  const getPassword = (e)=>{

    setPassword(e.target.value);

  }

  const handleRegister = (e)=>
  {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
     
      const {displayName, email, photoURL} = result.user;

      const userInfo = {
        name : displayName,
        email : email,
        photo : photoURL,
      }

      setUser(userInfo);
      //console.log(result.user)
    })
    .catch((error) => {
     
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }

    return (
       <div>
        <div className="container p-5 m-5 ">

          <h1>{user.email}</h1>


        <Card style={{ width: '60%', background : 'rgb(235, 235, 234)' }} className = "m-auto">
          <Card.Body>
            <Form onSubmit = {handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange = {getEmail} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange = {getPassword} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              
              <Button variant="primary" type="submit">
                Registration Now
              </Button>
            </Form>
            </Card.Body>

            <hr /><hr />
            <Button variant="outline-dark">Already have an account? </Button>
            <hr />
          <Button variant="outline-secondary">Go to Log In page? </Button>
        </Card>

        <hr/>

        
        <br />
            
        </div>

        <Footer></Footer>
            
    </div>
    );
};

export default Registration;