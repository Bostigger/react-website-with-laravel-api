import React, {Component, Fragment} from 'react';
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import Footer from "../../components/footer/footer";
import AllServices from "../../components/allServices/AllServices";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
           <Fragment>
               <NavigationBar/>
               <PageTitle pageTitle={"Services"}/>
               <AllServices/>
               <Footer/>
           </Fragment>
        );
    }

}export default ServicePage;