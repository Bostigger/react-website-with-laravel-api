import React, {Component, Fragment} from 'react';
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import AboutDescription from "../../components/aboutDescription/AboutDescrition";
import Footer from "../../components/footer/footer";
import About from "../../components/profile/About";

class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
           <Fragment>
               <NavigationBar/>
               <PageTitle pageTitle={"About Me"}/>
               <About/>
               <AboutDescription/>
               <Footer/>
           </Fragment>
        );
    }
}
export default AboutPage;