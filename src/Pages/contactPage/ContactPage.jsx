import React, {Component, Fragment} from 'react';
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/footer";
import ContactSec from "../../components/contactSection/ContactSec";

class ContactPage extends Component{

    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
          <Fragment>
              <NavigationBar/>
              <PageTitle pageTitle={"Contact Us"}/>
              <ContactSec/>
              <Footer/>
          </Fragment>
        );
    }

}export default ContactPage;