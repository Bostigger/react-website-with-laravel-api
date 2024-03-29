import React, {Component, Fragment} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faCheck, fas} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


class Footer extends Component{

    render() {
        return (
            <Fragment>
                <Container fluid={true} className={"text-center footerMain p-5"}>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                           <h3 className={"footerText"}>Follow Me</h3>
                            <FontAwesomeIcon icon={faAddressBook} size={'2x'}/>
                            <FontAwesomeIcon icon={faAddressBook} size={'2x'}/>

                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <p className={"footerMainText"}>
                                <h3 className={"footerText"}>Address</h3>
                                Paa Grant street
                                Western Region <br/>
                                Phone: 0559099224 <br/>
                                Email: tricksteck@gmail.com
                            </p>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <h3 className={"footerText"}>Information</h3>
                            <Link  className={"footerLink"} to="/about">About Us</Link> <br/>
                            <Link className={"footerLink"} to="/services">Services</Link> <br/>
                            <Link className={"footerLink"} to="/contact">Contact Us</Link> <br/>
                            <Link className={"footerLink"} to="/courses">Courses</Link> <br/>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <h3 className={"footerText"}>Links</h3>
                            <Link className={"footerLink"} to="/refund">Refund Policy</Link> <br/>
                            <Link className={"footerLink"} to="/terms">Terms and Conditions</Link> <br/>
                            <a className={"footerLink"} href="">Sitemap</a> <br/>
                            <a className={"footerLink"} href="">Blog</a> <br/>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className={"copyRightSection text-center"}>
                    <p className={"coprightText"}>CopyRight 2022. Tricksteck Develops</p>
                </Container>
            </Fragment>
        );
    }
}
export default Footer;