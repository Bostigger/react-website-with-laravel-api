import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";

class TermsDescription extends Component{

    render() {
        return (
            <Fragment>
                <Container className={"mt-4"}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h3 className={"serviceTitle"}>Terms and Conditions</h3>
                           <p className={"serviceText"}>
                               Welcome to Reasite!

                               These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at Website.com.

                               By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.

                               The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                           </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h4 className={"serviceTitle"}>Cookies</h4>
                            <p className={"serviceText"}>
                                Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.

                                You must not:

                                Republish material from Website Name
                                Sell, rent or sub-license material from Website Name
                                Reproduce, duplicate or copy material from Website Name
                                Redistribute content from Website Name
                                This Agreement shall begin on the date hereof.

                                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Company Name does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Company Name,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Company Name shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

                                Company Name reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions
                               tion of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default TermsDescription;