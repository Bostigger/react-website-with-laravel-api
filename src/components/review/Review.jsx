import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GetApiUrl from "../../RestApi/apiClient/GetApiUrl";
import ApiUrl from "../../RestApi/apiUrl/ApiUrl";

class Reviews extends Component{
    constructor(props) {
        super(props);
        this.state={
            clientReviewsData:[]
        }
    }

    componentDidMount() {
        GetApiUrl.GetApiRequest(ApiUrl.ClientReviewsData).then((result)=>{
            this.setState({
                clientReviewsData:result
            })
        })
    }

    render() {

        const clientReviewResults = this.state.clientReviewsData;
        const reviews = clientReviewResults.map((review)=>{
            return (
                <div>
                    <Row className={"editReview justify-content-center "}>
                        <Col lg={6} md={6} sm={12}>
                            <img className={"imgStyle m-auto"} src={review.client_image} alt=""/>
                        </Col>
                        <h4 className= "reviewName">{review.client_name}</h4>
                        <p className={"reviewText"}>
                            {review.client_review}
                        </p>
                    </Row>
                </div>
            )
        })


        var settings = {
            autoplaySpeed:5000,
            autoplay:true,
            dots: true,
            infinite: true,
            vertical:true,
            verticalSwiping: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (
           <Fragment>
               <Container fluid={true}  className={"reviewSection p-1 text-center justify-content-center"}>
                   <h2 className= "reviewHeader text-center">what our clients say</h2>
                   <div className="revbottom-line"></div>

                   <Slider {...settings}>
                       {reviews}
                   </Slider>
               </Container>
           </Fragment>
        );
    }
}
export default Reviews;