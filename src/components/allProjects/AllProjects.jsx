import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class AllProjects extends Component{

    render() {
        return (
            <Fragment>
                <Container className={"text-center"}>
                    <h2 className= "serviceHeader text-center">Available projects</h2>
                    <div className="bottom-line"></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className={"projectCard"} >
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1657099896~exp=1657100496~hmac=f74b36835bc52df698445479685ca24dac3d6cfb27cda8e76cc235b527b99eb0&w=826" />
                                <Card.Body>
                                    <Card.Title className={"serviceTitle"}>Project one</Card.Title>
                                    <Card.Text className={"serviceText"}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"> <Link  className={"pageLinks"} to={"/project-details"}> View Project Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className={"projectCard"} >
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?t=st=1657099079~exp=1657099679~hmac=90c1a4119a8945dbc71383a0d05481fed6da8128b1d7781cc43c711ff19fbadd&w=826" />
                                <Card.Body>
                                    <Card.Title className={"serviceTitle"}>Project Two</Card.Title>
                                    <Card.Text className={"serviceText"}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"> <Link className={"pageLinks"} to={"/project-details"}> View Project Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className={"projectCard"} >
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37861.jpg?t=st=1657086761~exp=1657087361~hmac=29100052c8f5b141affb5eca315c31e3069604ed8e67aeea71a4abe4b0b014b3&w=826" />
                                <Card.Body>
                                    <Card.Title className={"serviceTitle"}>Project Three</Card.Title>
                                    <Card.Text className={"serviceText"}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"> <Link className={"pageLinks"}  to={"/project-details"}> View Project Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className={"projectCard"} >
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1657099896~exp=1657100496~hmac=f74b36835bc52df698445479685ca24dac3d6cfb27cda8e76cc235b527b99eb0&w=826" />
                                <Card.Body>
                                    <Card.Title className={"serviceTitle"}>Project one</Card.Title>
                                    <Card.Text className={"serviceText"}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"> <Link className={"pageLinks"}  to={"/project-details"}> View Project Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className={"projectCard"} >
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?t=st=1657099079~exp=1657099679~hmac=90c1a4119a8945dbc71383a0d05481fed6da8128b1d7781cc43c711ff19fbadd&w=826" />
                                <Card.Body>
                                    <Card.Title className={"serviceTitle"}>Project Two</Card.Title>
                                    <Card.Text className={"serviceText"}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"> <Link className={"pageLinks"}  to={"/project-details"}> View Project Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className={"projectCard"} >
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37861.jpg?t=st=1657086761~exp=1657087361~hmac=29100052c8f5b141affb5eca315c31e3069604ed8e67aeea71a4abe4b0b014b3&w=826" />
                                <Card.Body>
                                    <Card.Title className={"serviceTitle"}>Project Three</Card.Title>
                                    <Card.Text className={"serviceText"}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"> <Link className={"pageLinks"}  to={"/project-details"}> View Project Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }

}export default AllProjects;