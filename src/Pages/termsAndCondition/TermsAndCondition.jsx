import React, {Component, Fragment} from 'react';
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import TermsDescription from "../../components/terrmsAndConditions/termsDescription";
import Footer from "../../components/footer/footer";

class TermsAndCondition extends Component{
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <NavigationBar/>
                <PageTitle pageTitle={"Terms and Condition"} />
                <TermsDescription/>
                <Footer/>
            </Fragment>
        );
    }

}
export default TermsAndCondition;