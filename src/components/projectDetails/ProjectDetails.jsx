import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import projectImage from "../../assets/images/pdetails.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";

class ProjectDetails extends Component {

    render() {
        return (
            <Fragment>
                <Container className={"mt-5"}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div className={"about-thumb-wrap after-shape"}>
                              <img src={projectImage} alt=""/>
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className={""}>
                                <h2 className={"welcomeMaintext"}>Education in continuing a proud tradition</h2>
                                <p className={"serviceText"}>
                                    The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph
                                    The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph
                                </p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default ProjectDetails;