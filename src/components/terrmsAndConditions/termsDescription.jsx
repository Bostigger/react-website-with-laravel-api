import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";

class TermsDescription extends Component{
    constructor(props) {
        super(props);
        this.state= {
            termsAndCondition: "Loading..."


        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.CompanyData).then((result)=>{
            this.setState({
                termsAndCondition:result[0]['terms_and_agreements']
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Container className={"mt-4"}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h3 className={"serviceTitle"}>Terms and Conditions</h3>
                           <p className={"serviceText"}>
                               {this.state.termsAndCondition}
                           </p>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }

}
export default TermsDescription;