import React, {Component, Fragment} from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../assets/css/main.css';
import '../../assets/css/bootstrap.min.css';

class TopBar  extends Component{
    render() {
        return (
                <Fragment>
                    <Container fluid={true} className="topBar p-0">
                        <Container fluid={true}  className="overLay">
                           <Container className="mainContent">
                               <Row className="text-center">
                                   <Col>
                                       <h1 className="topBarTitle">Reasite Montessori</h1>
                                       <h2 className="topBarSubTitle">Mastering Concepts</h2>
                                       <Button>Start Today</Button>
                                   </Col>
                               </Row>
                           </Container>
                        </Container>
                    </Container>
                </Fragment>

        );
    }
}
export default TopBar;
