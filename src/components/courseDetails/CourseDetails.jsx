import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import courseIMage from "../../assets/images/summary.jpg"

class CourseDetails extends Component{

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                           <div className={"courseDetail"}>
                               <h4 className={"welcomeMaintext"}>Fox Nymphs Grab Quick-jived Waltz. Brick Quiz Whangs</h4>
                               <img src={courseIMage} style={{width:'100%'}} alt=""/>
                               <h6 className={"courseTextHead"}  style={{textAlign:'justify'}}>Overview</h6>
                               <p className={"serviceText"} style={{textAlign:'justify'}} >The quick, bThe quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.rown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab</p>


                           </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className={"courseDetailDescription"}>
                                <h3 className={"courseTextHead"}>Course Features</h3>
                                <hr/>
                              <p className={"courseText"}>
                                  <strong>Enrolled :</strong> 1200 students <br/>
                                  <strong>Duration :</strong> 2 hours <br/>
                                  <strong>Lectures :</strong> 8 <br/>
                                  <strong>Categories: </strong>Technology <br/>
                                  <strong>Tags: </strong>Android, JavaScript <br/>
                                  <strong>Instructor:</strong> Ethan Dean
                              </p>
                                <Container className={"text-center "}>
                                    <strong className={"coursePrice"}>Price :</strong> <span className={"coursePriceText"}>5000GHS</span>
                                    <br/><Button className={"btn-warning"}><p className={"courseBtn"}>Enroll Now</p></Button>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default CourseDetails;