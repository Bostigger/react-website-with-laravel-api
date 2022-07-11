import React, {Component, Fragment} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import Loading from "../loading/Loading";
import ApiError from "../error/ApiError";
import {Slide} from "react-awesome-reveal";

class Courses  extends Component{
    constructor(props) {
        super(props);
        this.state={
            limitCoursesData:[],
            apiError:false,
            loading:true
        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.CoursesLimitData).then((result)=>{
            if(result==null){
                this.setState({
                    apiError:true,
                    loading:false
                })
            }else {
                this.setState({
                    limitCoursesData: result,
                    loading:false,
                    apiError:false
                })
            }
        }).catch((error)=>{
            this.setState({
                apiError:true,

            })
        })
    }

    render() {
        if (this.state.loading === true) {
            return <Loading/>
        } else if (this.state.apiError === true) {
            return <ApiError/>
        } else {
            const limitedCourses = this.state.limitCoursesData;
            const courses = limitedCourses.map((course) => {
                return (
                    <Col lg={6} md={6} sm={12}>
                        <Row>
                            <Col lg={6} md={12} sm={12} className={"mb-4"}>
                                <img style={{width: '100%'}}
                                     src={course.course_thumbnail} alt=""/>

                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h3 className={"serviceTitle"}>{course.course_title}</h3>
                                <p style={{textAlign: 'justify'}}
                                   className={"serviceText"}>{course.short_description}</p>
                                <p><Link to={"/course-details/" + course.id + "/" + course.course_title}>View
                                    Details</Link></p>
                            </Col>

                        </Row>

                    </Col>

                )
            })

            return (
                <Fragment>
                    <Container>
                        <h2 className="serviceHeader text-center">Our Courses</h2>
                        <div className="bottom-line"></div>
                       <Slide direction={"right"} triggerOnce={true}>
                           <Row>
                               {courses}
                           </Row>
                       </Slide>
                    </Container>
                </Fragment>
            );
        }
    }
}
export default Courses;