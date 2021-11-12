import React from 'react';
import { Col, Container, Form, Row, Button, FloatingLabel } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container fluid>
              <Row>
                <Col>

                <br />
                <br />
                <br /><hr />
                <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Mobile</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                      </Form.Group>

                      

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Country</Form.Label>
                          <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>State</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Sylhet</option>
                            <option>Khulna</option>
                            
                          </Form.Select>
                        </Form.Group>

                        <br />

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                        <FloatingLabel controlId="floatingTextarea2" label="Type Your Message">
                                <Form.Control
                                  as="textarea"
                                  placeholder="Type Your Message"
                                  style={{ height: '100px' }}
                                />
                              </FloatingLabel>
                          </Form.Group>

                        

                        
                      </Row>

                      

                      <Button variant="primary" type="submit">
                        Send
                      </Button>
                    </Form>
                
                </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Contact;