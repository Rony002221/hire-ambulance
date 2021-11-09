import { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';

const Details = () => {


    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState([]);

    useEffect(()=>{

      fetch('/info.json')
      .then(res=>res.json())
      .then(data=>setDetails(data))
    }, []);

    useEffect(()=>{

      if(details.length > 0){

        const matchingData = details.find(detail=> detail.id === id)

        setSpecificDetails(matchingData);

      }

      

    }, [id,details])



    return (
        <div>
            

            <Container>
                <br/>
                <br/>

              <Row>
                <Col xs={6} md={6}>
                  <Image src={specificDetails?.picture} width = "95%" height = "90%" rounded />
                </Col>
                <Col xs={4} md={6}>
                  <h2>{specificDetails?.type} </h2><hr />
                  <h5>Fee : {specificDetails?.fee} TK</h5> <br />
                  <h5>Size : {specificDetails?.size} Type</h5> <br />
                  <p> <h6>Details about the Ambulance : {specificDetails?.details} </h6> </p> 
                  
                </Col>
                
              </Row>
            </Container>
 
            <Footer></Footer>
        </div>
    );
};

export default Details;