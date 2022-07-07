import React, {Component, Fragment} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faComment} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component{

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summarySection p-0">
                    <div className="">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row style={{marginTop:"10em"}} >
                                        <Col>
                                            <FontAwesomeIcon className={"iconStyleHeading"} icon={faGlobe} />
                                            <h1 className="topBarTitle">

                                                <CountUp start={0} end={2000} delayedCall>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                        <div>
                                                            <span ref={countUpRef} />
                                                        </div>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>

                                            </h1>
                                            <h4 className="topBarSubTitle">Projects</h4>
                                        </Col>
                                        <Col>
                                            <FontAwesomeIcon className={"iconStyleHeading"} icon={faStar} />
                                            <h1 className="topBarTitle">
                                                <CountUp start={0} end={1500} delayedCall>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                            <div>
                                                                <span ref={countUpRef} />
                                                            </div>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>

                                            </h1>
                                            <h4 className="topBarSubTitle">Clients</h4>
                                        </Col>
                                        <Col>
                                            <FontAwesomeIcon className={"iconStyleHeading"} icon={faComment} />
                                            <h1 className="topBarTitle">
                                                <CountUp start={0} end={10000} delayedCall>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                            <div>
                                                                <span ref={countUpRef} />
                                                            </div>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="topBarSubTitle">Reviews</h4>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col style={{marginTop:"6.5em"}} lg={4} md={6} sm={12}>
                                    <Card style={{ width: '20rem',marginTop:"5px" }}>
                                        <Card.Body>
                                            <Card.Title className={"summaryHeader mb-4"}>What i have achieved</Card.Title>
                                            <Card.Text>
                                               <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                               <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> Web Design</p>
                                               <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> Mobile design</p>
                                               <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> Code Testing</p>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}
export default Summary;

