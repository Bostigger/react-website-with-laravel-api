import React, {Component, Fragment} from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../assets/css/main.css';
import '../../assets/css/bootstrap.min.css';

class PageTitle  extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="pageTitleBar p-0">
                    <Container fluid={true}  className="pageTitleoverLay">
                        <Container className="mainPageContent">
                            <Row className="text-center">
                                <Col>
                                    <h1 className="topPageTitle">{this.props.pageTitle}</h1>

                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </Fragment>

        );
    }
}
export default PageTitle;
