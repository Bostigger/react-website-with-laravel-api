import React, {Component, Fragment} from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import axios from "axios";

class ContactSec extends Component{



    constructor(props) {
        super(props);
        this.state = {
            companyEmail: "Loading...",
            companyPhone: "Loading...",
            companyAddress: "Loading...",
            customer_email:"",
            customer_name:"",
            customer_phone:"",
            customer_address:"",
            message:"",

        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.CompanyProfile).then((result)=>{
            this.setState({
                companyEmail: result[0]['company_email'],
                companyPhone: result[0]['company_phone'],
                companyAddress: result[0]['company_address'],
            })
        })
    }

    onSubmitForm =(e)=>{
        e.preventDefault();
         axios.post(ApiUrl.CustomerMessageInsert,{
             customer_name:this.state.customer_name,
             customer_email:this.state.customer_email,
             customer_phone:this.state.customer_phone,
             customer_address:this.state.customer_address,
             message:this.state.message,
         }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
           <Fragment>
               <Container className={"mt-5 p-5"}>
                   <Row>
                       <Col lg={6} md={6} sm={12}>
                           <h3 className={"serviceTitle"}>Reach us</h3>
                           <Form onSubmit={this.onSubmitForm}>
                               <Form.Group className="mb-3">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control type="email" id="email" name="customer_email" placeholder="Enter email"
                                                 onChange={(e)=>{this.setState({customer_email:e.target.value})}} />
                               </Form.Group>
                               <Form.Group className="mb-3">
                                   <Form.Label>Name</Form.Label>
                                   <Form.Control type="text" id="name" name="customer_name" placeholder="Enter Preferred name"
                                                 onChange={(e)=>{this.setState({customer_name:e.target.value})}} />
                               </Form.Group>
                               <Form.Group className="mb-3">
                                  <Row>
                                      <Col>
                                          <Form.Group className="mb-3">
                                              <Form.Label>Address</Form.Label>
                                              <Form.Control type="text" name="customer_address" placeholder="Address" onChange={(e)=>{this.setState({customer_address:e.target.value})}}/>
                                          </Form.Group>
                                      </Col>
                                      <Col>
                                          <Form.Group className="mb-3">
                                              <Form.Label>Mobile</Form.Label>
                                              <Form.Control type="text" name="customer_phone" placeholder="0559099224"  onChange={(e)=>{this.setState({customer_phone:e.target.value})}} />
                                          </Form.Group>
                                      </Col>
                                  </Row>
                                   <FloatingLabel
                                       controlId="floatingTextarea"
                                       label="Leave us a message"
                                       className="mb-3"
                                   >
                                       <Form.Control as="textarea" name=    "message"  placeholder="Leave a comment here"  onChange={(e)=>{this.setState({message:e.target.value})}}/>
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
                               <span>{this.state.companyAddress}</span><br/>
                               <span>Western Region</span><br/>
                               <span>Phone:{this.state.companyPhone} </span><br/>
                               <span>Email:{this.state.companyEmail}</span><br/>
                           </p>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        );
    }
}
export default ContactSec;