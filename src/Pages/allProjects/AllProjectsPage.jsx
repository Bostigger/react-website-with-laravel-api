import React, {Component, Fragment} from 'react';
import {Nav} from "react-bootstrap";
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import Footer from "../../components/footer/footer";
import AllProjects from "../../components/allProjects/AllProjects";

class AllProjectsPage extends Component{

    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
           <Fragment>
               <NavigationBar/>
               <PageTitle pageTitle={"Portfolio"}/>
               <AllProjects/>
               <Footer/>
           </Fragment>
        );
    }

}export default AllProjectsPage;