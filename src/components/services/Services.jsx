import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import designIcon from '../../assets/images/design.png';
import WebIcon from '../../assets/images/web.png';
import EcommerceIcon from '../../assets/images/ecommerce.png';
import '../../assets/css/main.css';
import '../../assets/css/bootstrap.min.css';
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import Loading from "../loading/Loading";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state={
            servicesData:[],
            loading:true,
        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.ServicesData).then((result)=>{
            this.setState({
                servicesData:result,
                loading:false
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        if (this.state.loading === true) {
            return <Loading/>
        } else {
            const allServiceData = this.state.servicesData;
            const services = allServiceData.map((service) => {
                return (<Col lg={4} md={6} sm={12} className="text-center ">
                        <div className="servicesCard">
                            <img src={service.image} style={{height: '80px', width: '80px'}} alt=""/>
                            <h4 className="serviceTitle">{service.service_name}</h4>
                            <p className="serviceText"> {service.service_description}</p>
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
                            {services}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}
export default Services;