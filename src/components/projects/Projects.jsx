import React, {Component, Fragment} from 'react'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import Loading from "../loading/Loading";
import ApiError from "../error/ApiError";
import {Slide} from "react-awesome-reveal";

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state={
            recentProjects:[],
            loading:true,
            apiError:false
        }
    }
    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.ProjectLimitData).then((result)=>{
            if(result==null){
                this.setState({
                    recentProjects:result,
                    loading:false,
                    apiError:true
                });
            }else {
                this.setState({
                    recentProjects: result,
                    loading: false,
                    apiError: false
                });
            }
        }).catch((err)=>{
            this.setState({
               apiError:true
            });
        })
    }
    render() {
        if (this.state.loading === true) {
            return <Loading/>
        }else if(this.state.apiError===true){
            return <ApiError/>
        }else {
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
                   <Slide triggerOnce={true} direction={"left"}>
                       <Row>
                           {recentProjects}
                       </Row>
                   </Slide>

               </Container>
           </Fragment>
        );
    }
}
}
export default Projects;

