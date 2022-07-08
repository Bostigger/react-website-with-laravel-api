import React, {Component, Fragment} from "react";
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import AllCourses from "../../components/allCourses/AllCourses";
import Footer from "../../components/footer/footer";

class AllCoursesPage extends Component{
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <NavigationBar/>
                <PageTitle pageTitle={"All Courses"}/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }

}export default AllCoursesPage;