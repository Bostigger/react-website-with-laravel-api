import React, {Component, Fragment} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import projectImage from "../../assets/images/pdetails.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
      this.state={
          receivedProjectId:props.id,
          selectedProject:[]
      }
    }
    componentDidMount() {
        axios.get(ApiUrl.SelectedProject+this.state.receivedProjectId).then((response)=>{
            this.setState({
                selectedProject:response.data,
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <Fragment>
                <Container className={"mt-5"}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div className={"about-thumb-wrap after-shape"}>
                              <img src={this.state.selectedProject['project_full_image']} style={{width:"540px",height:"607px"}} alt=""/>
                              <Button variant={"info"} className={"mt-3"} target={"_blank"} href={this.state.selectedProject['project_link']}>View Live Preview</Button>
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className={""}>
                                <h2 className={"welcomeMaintext"}>Project Overview</h2>
                                <p className={"serviceText"}>
                                    {this.state.selectedProject['project_full_description']}
                                </p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>
                                <p className={"sumaryText"}><FontAwesomeIcon className={"iconStyle"} icon={faCheckSquare} /> System Analyis</p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default ProjectDetails;