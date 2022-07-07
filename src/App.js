import React from "react";
import Topbar from "./components/Topbar/Topbar";
import Services from "./components/services/Services";
import NavigationBar from "./components/Topbar/NavigationBar";
import Analysis from "./components/analytics/Analysis";
import Summary from "./components/summary/Summary";
import Projects from "./components/projects/Projects";
import Courses from "./components/courses/Courses";
import VideoComponent from "./components/video/videoComponent";
import PageVideo from "./components/video/videoComponent";
import Reviews from "./components/review/Review";
import About from "./components/profile/About";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
        <NavigationBar/>
        <Topbar/>
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

export default App;
