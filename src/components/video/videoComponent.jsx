import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideoSlash} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player/youtube";

class PageVideo extends Component{
    constructor(props) {
        super(props);
        this.state={
            modalShow:false,
        }
    }

    showModal = ()=>{
        this.setState({
            modalShow:true,
        })
    }

    hideModal = ()=>{
        this.setState({
            modalShow:false,
        })
    }



    render() {
        return (
            <Fragment>
                <Container className={"text-center"}>
                    <h2 className= "serviceHeader text-center">Watch Video</h2>
                    <div className="bottom-line"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                          <p style={{textAlign:"justify",marginRight:"3%"}} className={"serviceText"}>
                              commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapib
                              us. Vivamus elementum semper nisi. Aenean vulpuommodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapib
                              us. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                          </p>
                        </Col>
                        <Col lg={6} md={12} sm={12} className={"pageVideo"}>
                          <FontAwesomeIcon style={{fontSize:"40px",color:"#fff"}} icon={faVideoSlash} onClick={this.showModal}/>
                            <Modal
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={this.state.modalShow}
                                onHide={this.hideModal}
                                keyboard={false}
                            >
                                <Modal.Header closeButton onClick={this.hideModal}>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Watch our video
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <ReactPlayer playing={true} height={360} width={760} controls={true} url='https://www.youtube.com/watch?v=ZquVz7FBdQg&ab_channel=GyakieVEVO'/>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.hideModal}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default PageVideo;