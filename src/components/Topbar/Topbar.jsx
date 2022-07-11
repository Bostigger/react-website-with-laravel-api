import React, {Component, Fragment} from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../assets/css/main.css';
import '../../assets/css/bootstrap.min.css';
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import axios from "axios";
import Loading from "../loading/Loading";
import ApiError from "../error/ApiError";
import {Fade} from "react-awesome-reveal";

class TopBar  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeData: [],
            loaderClass:"text-center",
            topBarData:"d-none",
            apiError:"d-none",
        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.HomepageData).then((result) => {
            if(result==null){
                this.setState({
                    loaderClass:"d-none",
                    topBarData:"d-none",
                    apiError:"text-center"

                })
            }else {

                this.setState({
                    homeData: result,
                    loaderClass: "d-none",
                    topBarData: "text-center",
                    apiError: "d-none"

                })
            }
        }).catch((error) => {
            this.setState({
                apiError:"text-center",
            })
        })

    }

    render() {

            const homedataResults = this.state.homeData;
            const homeResult = homedataResults.map((data) => {
                return (
                    <div>
                        <Col className={this.state.apiError}>
                            <ApiError/>
                        </Col>
                        <Col className={this.state.loaderClass}>
                            <Loading/>
                        </Col>
                        <Col className={this.state.topBarData}>
                            <h1 className="topBarTitle">{data.home_title}</h1>
                            <h2 className="topBarSubTitle">{data.home_subtitle}</h2>
                            <Button>{data.button_text}</Button>
                        </Col>
                    </div>
                )
            })

            return (
                <Fragment>
                    <Container fluid={true} className="topBar p-0">
                        <Container fluid={true} className="overLay">
                            <Container className="mainContent">
                               <Fade direction={"up"} triggerOnce={true}>
                                   <Row className="text-center">
                                       {homeResult}
                                   </Row>
                               </Fade>
                            </Container>
                        </Container>
                    </Container>
                </Fragment>

            );
        }
}

export default TopBar;
