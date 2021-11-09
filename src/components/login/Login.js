import React from 'react';
import { Form,Button, Card } from 'react-bootstrap';
import Footer from '../footer/Footer';

const Login = () => {
    return (
        <div>
          
            <div className="container p-5 m-5 ">

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
                    Submit
                  </Button>
                </Form></Card.Body>
            </Card>

            
            </div>

            <Footer/>
            
        </div>
    );
};

export default Login;