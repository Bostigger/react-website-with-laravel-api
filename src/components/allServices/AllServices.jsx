import React, {Component, Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import designIcon from "../../assets/images/design.png";
import EcommerceIcon from "../../assets/images/ecommerce.png";
import WebIcon from "../../assets/images/web.png";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import Loading from "../loading/Loading";
import ApiError from "../error/ApiError";

class AllServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allServices: [],
            loading: true,
            apiError: false
        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.ServicesData).then((result)=>{
            if(result==null){
                this.setState({
                    loading:false,
                    apiError:true
                })
            }else{
                this.setState({
                    allServices:result,
                    loading:false,
                    apiError:false
                })
            }
        }).catch((err)=>{
            this.setState({
                apiError:true
            })
        })
    }


    render() {

        if (this.state.loading === true) {
            return <Loading/>
        } else if (this.state.apiError === true) {
            return <ApiError/>
        } else {
            const allServicesData = this.state.allServices;
            const service = allServicesData.map((service) => {
                return (
                    <Col lg={4} md={6} sm={12} className="text-center ">
                        <div className="servicesCard">
                            <img src={service.image} style={{height: '80px', width: '80px'}} alt=""/>
                            <h4 className="serviceTitle">{service.service_name}</h4>
                            <p className="serviceText">{service.service_description}</p>
                        </div>
                    </Col>
                )
            })

            return (
                <Fragment>
                    <Container>
                        <h2 className="serviceHeader text-center">our Services</h2>
                        <div className="bottom-line"></div>
                        <Row>
                            {service}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}
export default AllServices;