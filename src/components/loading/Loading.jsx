import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LoadingIcon from '../../assets/images/loader svg.svg';

class Loading extends Component{

    render() {
        return (
           <Fragment>
               <Container className={"text-center"}>
                   <Row>
                       <Col>
                           <img src={LoadingIcon} alt=""/>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        );
    }
    
}
export default Loading;