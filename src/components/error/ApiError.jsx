import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ErrorIcon from "../../assets/images/error.svg";

class ApiError extends Component{

    render() {
        return (
           <Fragment>
               <Container className={"text-center"}>
                   <Row>
                       <Col>
                           <img src={ErrorIcon} style={{width:"180px",height:"180px"}} alt=""/>
                           <h4 className={"errorText"}>Error fetching data from Api</h4>
                           <p className={"serviceText"}>Check your internet connection</p>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        );
    }

}
export default ApiError;