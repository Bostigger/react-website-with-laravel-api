import React, {Component, Fragment, useEffect} from "react";
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import CourseDetails from "../../components/courseDetails/CourseDetails";
import Footer from "../../components/footer/footer";
import {useParams} from "react-router-dom";

function CourseDetailsPage(props){

    let {courseId} = useParams();
    let {courseName} = useParams();

    useEffect(()=>{
        window.scroll(0,0);
    },[])

        return (
           <Fragment>
               <NavigationBar/>
               <PageTitle pageTitle={courseName}/>
               <CourseDetails courseID={courseId}/>
               <Footer/>
           </Fragment>
        );


}
export default CourseDetailsPage;