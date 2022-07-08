import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import designIcon from "../../assets/images/design.png";
import EcommerceIcon from "../../assets/images/ecommerce.png";
import WebIcon from "../../assets/images/web.png";

class AllServices extends Component {

    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className= "serviceHeader text-center">our Services</h2>
                    <div className="bottom-line"></div>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="text-center ">
                            <div className="servicesCard">
                                <img src={designIcon} style={{height:'80px',width:'80px'}} alt=""/>
                                <h4 className= "serviceTitle" >Design</h4>
                                <p className="serviceText"> Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="text-center">
                            <div className="servicesCard">
                                <img src={EcommerceIcon} style={{height:'80px',width:'80px'}} alt=""/>
                                <h4 className= "serviceTitle">Ecommerce</h4>
                                <p className="serviceText"> Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="text-center">
                            <div className="servicesCard">
                                <img src={WebIcon} style={{height:'80px',width:'80px'}} alt=""/>
                                <h4 className= "serviceTitle">Web Development</h4>
                                <p className="serviceText"> Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
                            </div>
                        </Col>



                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default AllServices;