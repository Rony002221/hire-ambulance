import { Form,Button, Card } from 'react-bootstrap';
import useFirebase from '../../custom_Hook/useFirebase';
import Footer from '../footer/Footer';

const Login = () => {


  ////////////deStructuring from custom Hook/////////////////////
  const {handleGoogleSignUp,handleGitHubSignUp, user} = useFirebase();

  

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