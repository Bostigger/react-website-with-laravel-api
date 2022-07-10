import React, {Component, Fragment, useEffect} from 'react';
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import ProjectDetails from "../../components/projectDetails/ProjectDetails";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";


 function ProjectDetailsPage(props) {

    let {projectID} = useParams();
    let {projectName} = useParams();

     useEffect(() => {

         window.scroll(0,0);
         console.log(`/project/${projectID}`);

     }, []);


        return (
            <Fragment>
                <NavigationBar/>
                <PageTitle pageTitle={projectName}/>
                <ProjectDetails id={projectID}/>
                <Footer/>
            </Fragment>
        );


}
export default ProjectDetailsPage;