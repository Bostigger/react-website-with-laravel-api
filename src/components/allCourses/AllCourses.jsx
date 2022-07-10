import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import {Link} from "react-router-dom";
import Loading from "../loading/Loading";

class AllCourses extends Component {
    constructor(props) {
        super(props);
        this.state={
            allCoursesData:[],
            loading:true,
        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.AllCoursesData).then((result)=>{
            this.setState({
                allCoursesData:result,
                loading:false
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        if (this.state.loading === true) {
            return <Loading/>
        } else {

            const allCoursesData = this.state.allCoursesData;
            const courses = allCoursesData.map((course) => {
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
                        <h2 className="serviceHeader text-center">Available Courses</h2>
                        <div className="bottom-line"></div>
                        <Row>
                            {courses}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}
export default AllCourses