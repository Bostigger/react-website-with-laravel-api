import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import courseIMage from "../../assets/images/summary.jpg"
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";

class CourseDetails extends Component{
    constructor(props) {
        super(props);
        this.state={
            selectedCourseId:props.courseID,
            selectedCourseData:[]
        }
    }
    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.SingleCourseData+this.state.selectedCourseId).then((result)=>{
            this.setState({
                selectedCourseData:result
            })
            console.log(this.state.selectedCourseData[0])
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                           <div className={"courseDetail"}>
                               <h4 className={"welcomeMaintext"}>{this.state.selectedCourseData['long_title']}</h4>
                               <img src={courseIMage} style={{width:'100%'}} alt=""/>
                               <h6 className={"courseTextHead"}  style={{textAlign:'justify'}}>Overview</h6>
                               <p className={"serviceText"} style={{textAlign:'justify'}} >
                                   {this.state.selectedCourseData['long_description']}
                               </p>

                           </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className={"courseDetailDescription"}>
                                <h3 className={"courseTextHead"}>Course Features</h3>
                                <hr/>
                              <p className={"courseText"}>
                                  <strong>Enrolled :</strong>  {this.state.selectedCourseData['students_number']} students <br/>
                                  <strong>Duration :</strong>  {this.state.selectedCourseData['duration']}<br/>
                                  <strong>Lectures :</strong>  {this.state.selectedCourseData['lectures_number']}<br/>
                                  <strong>Categories: </strong>{this.state.selectedCourseData['categories']} <br/>
                                  <strong>Tags: </strong> {this.state.selectedCourseData['tags']} <br/>
                                  <strong>Instructor:</strong>  {this.state.selectedCourseData['instructor']}
                              </p>
                                <Container className={"text-center "}>
                                    <strong className={"coursePrice"}>Price :</strong> <span className={"coursePriceText"}> {this.state.selectedCourseData['course_price']}</span>
                                    <br/><Button className={"btn-warning"}><p className={"courseBtn"}>Enroll Now</p></Button>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default CourseDetails;