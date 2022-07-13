import React, {Component, Fragment} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../Pages/homepage/HomePage";
import ServicePage from "../Pages/servicePage/ServicePage";
import AboutPage from "../Pages/aboutPage/AboutPage";
import AllCoursesPage from "../Pages/allCoursesPage/AllCoursesPage";
import AllProjectsPage from "../Pages/allProjects/AllProjectsPage";
import ContactPage from "../Pages/contactPage/ContactPage";
import RefundPage from "../Pages/refundPage/RefundPage";
import TermsAndCondition from "../Pages/termsAndCondition/TermsAndCondition";
import ProjectDetailsPage from "../Pages/projectDetailsPage/ProjectDetailsPage";
import CourseDetailsPage from "../Pages/courseDetailsPage/CourseDetailsPage";
import MainPageNotFound from "../Pages/404MainPage/MainPageNotFound";

class AppRouter extends Component{

    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path='*' element={<MainPageNotFound/>} />
                    <Route path={"/"} element={<HomePage/>} />
                    <Route path={"/home"} element={<HomePage/>} />
                    <Route path={"/services"} element={<ServicePage/>} />
                    <Route path={"/about"} element={<AboutPage/>} />
                    <Route path={"/courses"} element={<AllCoursesPage/>} />
                    <Route path={"/portfolio"} element={<AllProjectsPage/>} />
                    <Route path={"/contact"} element={<ContactPage/>} />
                    <Route path={"/refund"} element={<RefundPage/>} />
                    <Route path={"/terms"} element={<TermsAndCondition/>} />
                    <Route path={"/project-details/:projectID/:projectName"} element={<ProjectDetailsPage/>} />
                    <Route path={"/course-details/:courseId/:courseName"} element={<CourseDetailsPage/>} />

                </Routes>
            </Fragment>
        );
    }

}
export default AppRouter;