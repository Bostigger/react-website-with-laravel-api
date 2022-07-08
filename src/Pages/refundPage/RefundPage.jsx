import React, {Component, Fragment} from 'react';
import NavigationBar from "../../components/Topbar/NavigationBar";
import PageTitle from "../../components/pageIdentifier/PageTitle";
import RefundDescription from "../../components/refundpolicyDescription/refundDescription";
import Footer from "../../components/footer/footer";

class RefundPage extends Component{
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
           <Fragment>
               <NavigationBar/>
               <PageTitle pageTitle={"Refund Policy"} />
               <RefundDescription/>
               <Footer/>
           </Fragment>
        );
    }

}
export default RefundPage;