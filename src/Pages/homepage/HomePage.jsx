import React, {Component} from 'react'
import NavigationBar from "../../components/Topbar/NavigationBar";
import Topbar from "../../components/Topbar/Topbar";
import Services from "../../components/services/Services";
import Analysis from "../../components/analytics/Analysis";
import Summary from "../../components/summary/Summary";
import Projects from "../../components/projects/Projects";
import Courses from "../../components/courses/Courses";
import PageVideo from "../../components/video/videoComponent";
import Reviews from "../../components/review/Review";
import About from "../../components/profile/About";
import Footer from "../../components/footer/footer";
import WelcomeArea from "../../components/welcome/WelcomeArea";

class HomePage extends Component{
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <div>
                <NavigationBar/>
                <Topbar/>
                <WelcomeArea/>
                <Services/>
                <Analysis/>
                <Summary/>
                <Projects/>
                <Courses/>
                <PageVideo/>
                <Reviews/>
                <About/>
                <Footer/>
            </div>
        );
    }
}
export default HomePage;