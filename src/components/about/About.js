import React from 'react';
import Footer from '../footer/Footer';

const About = () => {
    return (
        <div>
            <br /><br />
            
            <h2 className = "text-center text-primary">ABOUT US (SHORT PROFILE OF D.A.S. BD)</h2><br /><hr />


           <div className="container">

           <table class="table">
                  
                  <tbody className = "">
                    <tr>
                      <th scope="row">Full Name</th>
                      <td>Dhaka Ambulance Service BD</td>
                      
                    </tr>
                    <tr>
                      <th scope="row">Short Name</th>
                      <td>D.A.S BD</td>
                      
                    </tr>
                    <tr>
                      <th scope="row">Year of Est</th>
                      <td colspan="2">2010</td>
                    </tr>
                    <tr>
                      <th scope="row">Background</th>
                      <td colspan="2">We provide. ICU Ambulance Service, Ac ambulance, freezing ambulance. Best Ambulance Service, Competitive Pricing, No Hidden Charge Call Us for Ambulance. Cheap Fare Rate. 24/7 available. Online Booking Service. 10+Ambulance.</td>
                    </tr>
                    <tr>
                      <th scope="row"> Experience</th>
                      <td colspan="2">More than 10 years (Since 2010)</td>
                    </tr>
                    <tr>
                      <th scope="row">Service</th>
                      <td colspan="2">The emergency department provides service 24 hours a day and 7 days a week. ICU ambulance service is also available for both critical and non-critical patient ...</td>
                    </tr>
                    
                  </tbody>
                </table>

            </div>

            <br />
            <Footer></Footer> 
        </div>
    );
};

export default About;