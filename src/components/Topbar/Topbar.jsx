import React, {Component, Fragment} from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../assets/css/main.css';
import '../../assets/css/bootstrap.min.css';
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";
import axios from "axios";
import Loading from "../loading/Loading";

class TopBar  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeData: [],
            loading: true
        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.HomepageData).then((result) => {
            this.setState({
                homeData: result,
                loading: false

            })
        }).catch((error) => {
            this.setState({
                homeData: []
            })
        })

    }

    render() {
        if (this.state.loading === true) {
            return <Loading/>
        } else {
            const homedataResults = this.state.homeData;
            const homeResult = homedataResults.map((data) => {
                return (
                    <div>
                        <Col>
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
                                <Row className="text-center">
                                    {homeResult}
                                </Row>
                            </Container>
                        </Container>
                    </Container>
                </Fragment>

            );
        }
    }
}

export default TopBar;
