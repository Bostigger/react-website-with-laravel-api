import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AllCourses extends Component {

    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className= "serviceHeader text-center">Available Courses</h2>
                    <div className="bottom-line"></div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img style={{width:'100%'}} src="https://img.freepik.com/free-photo/senior-man-woman-paying-attention-class_23-2149114210.jpg?t=st=1657102774~exp=1657103374~hmac=d93096288f252ff1cf914662729e1b3a53f2db1a89a1a6d734f5c6cfbb6a129a&w=826" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h3 className={"serviceTitle"}>React</h3>
                                    <p style={{textAlign:'justify'}} className={"serviceText"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi   </p>
                                </Col>

                                <Col lg={6} md={12} sm={12} className={"mt-4"}>
                                    <img style={{width:'100%'}} src="https://img.freepik.com/free-photo/senior-man-woman-paying-attention-class_23-2149114205.jpg?w=826" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12} className={"mt-4"}>
                                    <h3  className={"serviceTitle"}>Javascript</h3>
                                    <p style={{textAlign:'justify'}} className={"serviceText"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi   </p>
                                </Col>

                                <Col lg={6} md={12} sm={12} className={"mt-4"}>
                                    <img style={{width:'100%'}} src="https://img.freepik.com/free-photo/senior-man-woman-paying-attention-class_23-2149114205.jpg?w=826" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12} className={"mt-4"}>
                                    <h3  className={"serviceTitle"}>Javascript</h3>
                                    <p style={{textAlign:'justify'}} className={"serviceText"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi   </p>
                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img style={{width:'100%'}} src="https://img.freepik.com/free-photo/senior-man-doing-online-classes-laptop_23-2149114248.jpg?t=st=1657103517~exp=1657104117~hmac=d5f5178a3efa94cc0cc02deb656304c2f2f645dfc0c850cd5b930e4b69ead245&w=826" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h3 className={"serviceTitle"}>Laravel 9</h3>
                                    <p style={{textAlign:'justify'}} className={"serviceText"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi   </p>
                                </Col>

                                <Col lg={6} md={12} sm={12} className={"mt-4"}>
                                    <img style={{width:'100%'}} src="https://img.freepik.com/free-photo/senior-man-doing-online-classes-laptop_23-2149114299.jpg?t=st=1657103477~exp=1657104077~hmac=359576f06a9d99735404fd0ef968c015f4355d73d0d5a67f7df61c9317aa6b3c&w=826" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12} className={"mt-4"}>
                                    <h3  className={"serviceTitle"}>Flutter</h3>
                                    <p style={{textAlign:'justify'}} className={"serviceText"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi   </p>
                                </Col>

                                <Col lg={6} md={12} sm={12} className={"mt-4"}>
                                    <img style={{width:'100%'}} src="https://img.freepik.com/free-photo/senior-man-woman-paying-attention-class_23-2149114205.jpg?w=826" alt=""/>
                                </Col>

                                <Col lg={6} md={6} sm={12} className={"mt-4"}>
                                    <h3  className={"serviceTitle"}>Javascript</h3>
                                    <p style={{textAlign:'justify'}} className={"serviceText"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturi   </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default AllCourses