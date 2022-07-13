import React, {Component, Fragment} from 'react'
import picture from '../../assets/images/profile.png';
import {Col, Container, Row} from "react-bootstrap";
import Typewriter from 'typewriter-effect';


class About extends Component{

    render() {

        return (
            <Fragment>
                <Container className={"text-center"}>
                    <h2 className= "serviceHeader text-center">Meet Tricksteck</h2>
                    <div className="bottom-line"></div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                           <div className={"aboutImage"}>
                               <img className={"ceoImage"} src={picture} alt=""/>
                           </div>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                         <div className={"aboutMeDetails"}>
                             <h3 className={"aboutMeIntro"}>HI ,There I'm</h3>
                             <h2 className={"aboutMeName"}>TRICKSTECK</h2>
                             <h3 className={"aboutMeIntro"}>
                              <span>
                                   <Typewriter
                                       options={{
                                           strings: ['Web Developer', 'Mobile Developer','Developer Evangelist'],
                                           autoStart: true,
                                           loop: true,
                                       }}
                                   />
                              </span>

                             </h3>
                         </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default About;