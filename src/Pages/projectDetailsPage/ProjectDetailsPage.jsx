import React, {Component, Fragment} from 'react';
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import ProjectDetails from "../../components/projectDetails/ProjectDetails";
import Footer from "../../components/footer/footer";

class ProjectDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <NavigationBar/>
                <PageTitle pageTitle={"Project Details"}/>
                <ProjectDetails/>
                <Footer/>
            </Fragment>
        );
    }

}
export default ProjectDetailsPage;