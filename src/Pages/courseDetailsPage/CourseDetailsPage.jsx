import React, {Component, Fragment} from "react";
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import CourseDetails from "../../components/courseDetails/CourseDetails";
import Footer from "../../components/footer/footer";

class CourseDetailsPage extends Component{

    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
           <Fragment>
               <NavigationBar/>
               <PageTitle pageTitle={"Course Details"}/>
               <CourseDetails/>
               <Footer/>
           </Fragment>
        );
    }

}
export default CourseDetailsPage;