import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";

class RefundDescription extends Component{

    render() {
        return (
            <Fragment>
                <Container className={"mt-4"}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h3 className={"serviceTitle"}>Refund Policy</h3>
                            <p className={"serviceText"}>
                                People are often hesitant to buy online, which can lead to low conversion rates and sales. Return and refund policies for ecommerce stores have been proven to increase the number of people who end up making a purchase once they're on your website.
                                Perhaps Of course, customers may be unhappy with their order for many reasons. It might arrive damaged, it was the wrong size or it didn't meet all their expectations. They may request a refund or a replacement.
                                These requests can be overwhelming without a system to handle them. Think of all the time necessary to handle customer service emails and the money your company may have to spend to replace the returned product. Now think about those expenses just after Black Friday or Christmas!
                                Thankfully, the solution is relatively simple. You can make returns and exchanges less of a problem by writing and posting a solid Return and Refund Policy for your website. Moreover, you can help increase customer loyalty and potentially generate new revenue by doing somore importantly, however, having a Return and Refund Policy in place can help reduce your expenses when it comes to return deliveries. For instance, consider the fact that in the United States alone, Statista's most up-to-date statistics show that return deliveries cost businesses $550 Billion between 2016 and 2020
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h3 className={"serviceTitle"}>Standard Ecommerce Return Rates</h3>
                            <p className={"serviceText"}>
                                People are often hesitant to buy online, which can lead to low conversion rates and sales. Return and refund policies for ecommerce stores have been proven to increase the number of people who end up making a purchase once they're on your website.
                                Perhaps Of course, customers may be unhappy with their order for many reasons. It might arrive damaged, it was the wrong size or it didn't meet all their expectations. They may request a refund or a replacement.
                                These requests can be overwhelming without a system to handle them. Think of all the time necessary to handle customer service emails and the money your company may have to spend to replace the returned product. Now think about those expenses just after Black Friday or Christmas!
                                Thankfully, the solution is relatively simple. You can make returns and exchanges less of a problem by writing and posting a solid Return and Refund Policy for your website. Moreover, you can help increase customer loyalty and potentially generate new revenue by doing somore importantly, however, having a Return and Refund Policy in place can help reduce your expenses when it comes to return deliveries. For instance, consider the fact that in the United States alone, Statista's most up-to-date statistics show that return deliveries cost businesses $550 Billion between 2016 and 2020
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default RefundDescription;