import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import Loading from "../loading/Loading";

class AllProjects extends Component{

    constructor() {
        super();
        this.state={
            allProjectsData:[],
            loading:true,
        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.AllProjectsData).then((result)=>{
            this.setState({
                allProjectsData:result,
                loading:false
            })
        })
    }


    render() {

        if (this.state.loading === true) {
            return <Loading/>
        } else {
            const allProjectsResults = this.state.allProjectsData;
            const projects = allProjectsResults.map((project) => {
                return (
                    <Col lg={4} md={6} sm={12}>
                        <Card className={"projectCard"}>
                            <Card.Img variant="top" src={project.project_thumbnail}/>
                            <Card.Body>
                                <Card.Title className={"serviceTitle"}>{project.project_name}</Card.Title>
                                <Card.Text className={"serviceText"}>
                                    {project.project_short_description}
                                </Card.Text>
                                <Button variant="primary"> <Link className={"pageLinks"}
                                                                 to={"/project-details/" + project.id + "/" + project.project_name}> View
                                    Project Details</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
            return (
                <Fragment>
                    <Container className={"text-center"}>
                        <h2 className="serviceHeader text-center">Available projects</h2>
                        <div className="bottom-line"></div>
                        <Row>
                            {projects}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }

}export default AllProjects;