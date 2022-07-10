import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";

class RefundDescription extends Component{
    constructor(props) {
        super(props);
        this.state={
            refundPolicyData:"...",
        }
    }
    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.CompanyData).then((result)=>{
            this.setState({
                refundPolicyData:result[0]['refund']
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Container className={"mt-4"}>
                    <Row>

                        <Col lg={12} md={12} sm={12}>
                            <h3 className={"serviceTitle"}>Refund Policy</h3>
                            <p className={"serviceText"}>
                                {this.state.refundPolicyData}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default RefundDescription;