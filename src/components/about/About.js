import React from 'react';
import Footer from '../footer/Footer';

const About = () => {
    return (
        <div>
            <br /><br />
            
            <h2 className = "text-center text-primary">ABOUT US (SHORT PROFILE OF JPS BD)</h2><br /><hr />


           <div className="container">

           <table class="table">
                  
                  <tbody className = "">
                    <tr>
                      <th scope="row">Full Name</th>
                      <td>Job Preparation Service BD</td>
                      
                    </tr>
                    <tr>
                      <th scope="row">Short Name</th>
                      <td>JPS BD</td>
                      
                    </tr>
                    <tr>
                      <th scope="row">Year of Est</th>
                      <td colspan="2">2010</td>
                    </tr>
                    <tr>
                      <th scope="row">Background</th>
                      <td colspan="2">Bangladesh Association of Software and Information Services (BASIS) is the national trade body for Software & IT Enabled Service industry of Bangladesh. Established in 1997, the association has been working with a vision of developing vibrant software & IT service industry in the country. Currently BASIS has over 800 members who contribute the majority in the Software & IT service industry in Bangladesh.</td>
                    </tr>
                    <tr>
                      <th scope="row">Training Experience</th>
                      <td colspan="2">More than 10 years (Since 2010)</td>
                    </tr>
                    <tr>
                      <th scope="row">Courses</th>
                      <td colspan="2">MHR offers varieties of courses to meet the challenges of continuous change of technology and platform. Since 2007, BITM has offered training courses in diversified area ranges from Web Platform to Mobile Platform</td>
                    </tr>
                    <tr>
                      <th scope="row">Quality of Course Materials</th>
                      <td colspan="2">All the course materials of JPS are designed and reviewed by Industry experts and practitioners. BASIS has course content and review team that regularly update the curriculum based on new technology and trends as well as market demand.</td>
                    </tr>
                    <tr>
                      <th scope="row">Trainer</th>
                      <td colspan="2">MHR-JPS-BD has pool of trainers with the industry work experience for minimum 3 years. Before offering any courses BASIS selects the trainer based on in-depth working experience on that relevant field.</td>
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