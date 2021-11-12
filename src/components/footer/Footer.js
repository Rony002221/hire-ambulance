import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <div className = "footer_Section">
      <>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Contact Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">See Location</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">More Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            
          </Nav.Item>
        </Nav>
        <p className="text-center mt-3 mb-1">Designed By - @MHR , 2021</p>
        
      </> 
    </div>
);
};

export default Footer;