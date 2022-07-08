import React, {Component, Fragment} from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";

class ContactSec extends Component{

    render() {
        return (
           <Fragment>
               <Container className={"mt-5 p-5"}>
                   <Row>
                       <Col lg={6} md={6} sm={12}>
                           <h3 className={"serviceTitle"}>Reach us</h3>
                           <Form>
                               <Form.Group className="mb-3">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control type="email" placeholder="Enter email" />
                               </Form.Group>
                               <Form.Group className="mb-3">
                                  <Row>
                                      <Col>
                                          <Form.Group className="mb-3">
                                              <Form.Label>Address</Form.Label>
                                              <Form.Control type="text" placeholder="Address" />
                                          </Form.Group>
                                      </Col>
                                      <Col>
                                          <Form.Group className="mb-3">
                                              <Form.Label>Mobile</Form.Label>
                                              <Form.Control type="text" placeholder="0559099224" />
                                          </Form.Group>
                                      </Col>
                                  </Row>
                                   <FloatingLabel
                                       controlId="floatingTextarea"
                                       label="Leave us a message"
                                       className="mb-3"
                                   >
                                       <Form.Control as="textarea" placeholder="Leave a comment here" />
                                   </FloatingLabel>
                               </Form.Group>


                               <Button variant="primary" type="submit">
                                   Submit
                               </Button>
                           </Form>
                       </Col>
                       <Col lg={6} md={6} sm={12}>
                           <h3 className={"serviceTitle"}>Contact Address</h3>
                           <p className={"serviceText"}>
                               Paa Grant street
                               Western Region <br/>
                               Phone: 0559099224 <br/>
                               Email: tricksteck@gmail.com
                           </p>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        );
    }
}
export default ContactSec;