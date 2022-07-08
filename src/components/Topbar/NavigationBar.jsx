import React, {Component, Fragment} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/css/main.css';
import '../../assets/css/bootstrap.min.css';
import logoWhite from '../../assets/images/logo_white.png';
import logoBlack from '../../assets/images/logo_black.png';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import HomePage from "../../Pages/homepage/HomePage";
import ServicePage from "../../Pages/servicePage/ServicePage";
import AboutPage from "../../Pages/aboutPage/AboutPage";
import AllCoursesPage from "../../Pages/allCoursesPage/AllCoursesPage";
import AllProjectsPage from "../../Pages/allProjects/AllProjectsPage";
import ContactPage from "../../Pages/contactPage/ContactPage";

class NavigationBar  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            navbarTitle : "navbarTitle",
            bg : "",
            variant : "dark",
            defBg:"dark",
            logo:[logoWhite],
        }


    }
    onPageScroll = ()=>{
        if (window.scrollY>100){
            this.setState({
                navbarTitle : "navbarTitleScroll",
                bg:"navbarBgScroll",
                variant : "light",
                defBg:"",
                logo : [logoBlack],
            })
        }else if(window.scrollY<100){
            this.setState({
                navbarTitle : "navbarTitle",
                variant : "dark",
                defBg:"dark",
                logo:[logoWhite],
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onPageScroll)
    }

    render() {
        return (
          <Fragment>
              <Navbar  collapseOnSelect fixed={"top"}  expand="lg" bg={this.state.defBg} variant={this.state.variant} className={this.state.bg}>
                  <Container>
                      <Navbar.Brand className={this.state.navbarTitle}><NavLink to={'/'}><img src={this.state.logo} alt=""/></NavLink></Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="me-auto">

                          </Nav>
                          <Nav>
                              <Nav.Link  className={"serviceTitle"}><NavLink to={'/home'}>Home</NavLink> </Nav.Link>
                              <Nav.Link className={"serviceTitle"}><NavLink to={'/about'}>About</NavLink> </Nav.Link>
                              <Nav.Link className={"serviceTitle"}><NavLink to={'/services'}>Services</NavLink> </Nav.Link>
                              <Nav.Link className={"serviceTitle"}><NavLink to={'/courses'}>Courses</NavLink> </Nav.Link>
                              <Nav.Link className={"serviceTitle"}><NavLink to={'/portfolio'}>Portfolio</NavLink> </Nav.Link>
                              <Nav.Link className={"serviceTitle"}><NavLink to={'/contact'}>Contact</NavLink> </Nav.Link>

                          </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>



          </Fragment>
        );
    }
}
export default NavigationBar;