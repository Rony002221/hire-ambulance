import { Col, Container, Image, Row } from 'react-bootstrap';
import Footer from '../footer/Footer';

const Details = () => {

    

    return (
        <div>
            

            <Container>
                <br/>
                <br/>

              <Row>
                <Col xs={6} md={6}>
                  <Image src="" width = "95%" height = "70%" rounded />
                </Col>
                <Col xs={4} md={6}>
                  <h2>Ambulance Name : </h2><hr />
                  <h5>Fee :  TK</h5> <br />
                  <p> <h6>Details about the Ambulance : </h6> </p> 
                  
                </Col>
                
              </Row>
            </Container>
 
            <Footer></Footer>
        </div>
    );
};

export default Details;