import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PageNotFoundIcon from "../../assets/images/404.jpg"

class PageNotFound extends Component {

    render() {
        return (
           <Fragment>
               <Container className={"text-center"}>
                   <Row>
                       <Col>
                           <img src={PageNotFoundIcon} style={{width:"600px",height:"400px"}} alt=""/>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        );
    }

}
export default PageNotFound;