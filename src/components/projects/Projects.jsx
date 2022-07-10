import React, {Component, Fragment} from 'react'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import Loading from "../loading/Loading";

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state={
            recentProjects:[],
            loading:true
        }
    }
    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.ProjectLimitData).then((result)=>{
          this.setState({
             recentProjects:result,
              loading:false
          });
        })
    }
    render() {
        if (this.state.loading === true) {
            return <Loading/>
        } else {
        const projectResultsData = this.state.recentProjects;
        const recentProjects = projectResultsData.map((project)=>{
           return (
               <Col lg={4} md={6} sm={12}>
                   <Card className={"projectCard"} >
                       <Card.Img variant="top" src={project.project_thumbnail} />
                       <Card.Body>
                           <Card.Title className={"serviceTitle"}>{project.project_name}</Card.Title>
                           <Card.Text className={"serviceText"}>
                               {project.project_short_description}
                           </Card.Text>
                           <Button variant="primary"> <Link className={"pageLinks"} to={"/project-details/"+project.id+"/"+project.project_name}> View Project Details</Link></Button>
                       </Card.Body>
                   </Card>
               </Col>
           )
        })

        return (
           <Fragment>
               <Container className={"text-center"}>
                   <h2 className= "serviceHeader text-center">our projects</h2>
                   <div className="bottom-line"></div>
                   <Row>
                       {recentProjects}
                   </Row>
               </Container>
           </Fragment>
        );
    }
}
}
export default Projects;

