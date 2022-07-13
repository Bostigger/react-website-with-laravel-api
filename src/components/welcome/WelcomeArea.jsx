import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import welcomeOne from "../../assets/images/welcomeOne.png";
import welcomeTwo from "../../assets/images/welcomeTwo.png";
import welcomeThree from "../../assets/images/welcomeThree.png";
import lightIcon from "../../assets/images/19.png";
import gradIcon from "../../assets/images/20.png";
import bookIcon from "../../assets/images/21.png";
import {Fade, Zoom} from "react-awesome-reveal";

class WelcomeArea extends Component{

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className={"intro-area"}>
                              <div className={"intro-inner"}>
                                  <Fade direction={"down"} triggerOnce={true}>
                                      <div className={"section-title text-center"}>
                                          <h6 className={"sub-title double-line serviceTitle"}>WELCOME</h6>
                                          <h2 className={"welcomeMaintext"}>
                                              An exemplary <br/>
                                              learning community
                                          </h2>
                                      </div>
                                  </Fade>
                                 <Zoom triggerOnce={true}>
                                     <Container className={"text-center"}>
                                         <Row>
                                             <Col lg={4} md={6} sm={12}>
                                                 <img src={welcomeOne} alt=""/>
                                                 <h5 className={"serviceTitle"}>Postgraduate</h5>
                                                 <p className={"serviceText"}>Learn to mastery</p>
                                             </Col>
                                             <Col lg={4} md={6} sm={12}>
                                                 <img src={welcomeTwo} alt=""/>
                                                 <h5 className={"serviceTitle"}>Postgraduate</h5>
                                                 <p className={"serviceText"}>Learn to mastery</p>
                                             </Col>
                                             <Col lg={4} md={6} sm={12} >
                                                 <img src={welcomeThree} alt=""/>
                                                 <h5 className={"serviceTitle"}>Postgraduate</h5>
                                                 <p className={"serviceText"}>Learn to mastery</p>
                                             </Col>
                                         </Row>
                                     </Container>
                                 </Zoom>
                                  <div className={"intro-footer bg-base mt-3 p-5"}>
                                   <Container>
                                       <Row className={"text-center"}>
                                           <Col lg={4} md={6} sm={12} >
                                           <Row>
                                               <Col>
                                                   <img src={lightIcon} alt=""/>
                                               </Col>
                                               <Col className={"yellowBoxText"}>
                                                   <h5>Engineering</h5>
                                                   <h5>Lorem ipsum dolor</h5>
                                               </Col>

                                           </Row>
                                           </Col>
                                           <Col lg={4} md={6} sm={12}>
                                               <Row>
                                                   <Col>
                                                       <img src={gradIcon} alt=""/>
                                                   </Col>
                                                   <Col className={"yellowBoxText"}>
                                                       <h5>Engineering</h5>
                                                       <h5>Lorem ipsum dolor</h5>
                                                   </Col>

                                               </Row>
                                           </Col>
                                           <Col lg={4} md={6} sm={12}>
                                               <Row>
                                                   <Col>
                                                       <img src={bookIcon} alt=""/>
                                                   </Col>
                                                   <Col className={"yellowBoxText"}>
                                                       <h5>Engineering</h5>
                                                       <h5>Lorem ipsum dolor</h5>
                                                   </Col>

                                               </Row>
                                           </Col>

                                       </Row>
                                   </Container>
                                  </div>
                              </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default WelcomeArea;