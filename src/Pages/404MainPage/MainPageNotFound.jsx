import React, {Component, Fragment} from 'react';
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import PageNotFound from "../../components/404Page/PageNotFound";
import Footer from "../../components/footer/footer";

class MainPageNotFound extends Component{

    render() {
        return (
            <Fragment>
                <NavigationBar/>
                <PageTitle pageTitle={"Page Not Found"}/>
                <PageNotFound/>
                <Footer/>
            </Fragment>
        );
    }
}
export default MainPageNotFound;