import React, {Component, Fragment} from 'react';
import { Col, Container, Row} from "react-bootstrap";

import '../../assets/css/main.css';
import '../../assets/css/bootstrap.min.css';
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import Loading from "../loading/Loading";
import ApiError from "../error/ApiError";
import {Fade, Slide} from "react-awesome-reveal";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state={
            servicesData:[],
            loading:true,
            apiError:false
        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.ServicesData).then((result)=>{
            if(result==null){
                this.setState({
                    loading:false,
                    apiError:true
                })
            }else {
                this.setState({
                    servicesData: result,
                    loading: false,
                    apiError: false
                })
            }
        }).catch((error)=>{
            console.log(error)
            this.setState({
                apiError:true
            })
        })
    }

    render() {
        if (this.state.loading === true) {
            return <Loading/>
        }else if(this.state.apiError===true){
            return <ApiError/>
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
                       <Slide direction={"down"} triggerOnce={true}>
                           <Row >
                               {services}
                           </Row>
                       </Slide>
                    </Container>
                </Fragment>
            );
        }
    }
}
export default Services;