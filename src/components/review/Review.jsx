import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Reviews extends Component{

    render() {
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
                       <div>
                           <Row className={"editReview justify-content-center "}>
                               <Col lg={6} md={6} sm={12}>
                                   <img className={"imgStyle m-auto"} src="https://img.freepik.com/free-photo/guy-hat-looks-shocked-into-camera-holding-binoculars_197531-23358.jpg?t=st=1657113075~exp=1657113675~hmac=31c96b74b555918b19bca7052b4039753f8cc3ea2e0eda94436fb0a83614ebda&w=826" alt=""/>
                               </Col>
                               <h4 className= "reviewName">Tricksteck</h4>
                               <p className={"reviewText"}>
                                   commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                   commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                   magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                   magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                   ultricies nec, pellentesque eu, pretium quis, sem.
                               </p>
                           </Row>
                       </div>

                       <div>
                           <Row className={"editReview justify-content-center"}>
                               <Col lg={6} md={6} sm={12}>
                                   <img className={"imgStyle m-auto"} src="https://img.freepik.com/free-photo/portrait-redhead-bearded-male-eyeglasses-dressed-elegant-wool-suit-grey-background_613910-15599.jpg?w=826&t=st=1657115434~exp=1657116034~hmac=2cdadd93e8c422afdf795775812b2ff21e432aba89917c6c6d7c122378153462" alt=""/>
                               </Col>
                               <h4 className= "reviewName">Tricksteck</h4>
                               <p className={"reviewText"}>
                                   commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                   commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                   magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                   magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                   ultricies nec, pellentesque eu, pretium quis, sem.
                               </p>
                           </Row>
                       </div>

                       <div>
                           <Row className={"editReview justify-content-center "}>
                               <Col lg={6} md={6} sm={12}>
                                   <img className={"imgStyle m-auto"} src="https://img.freepik.com/premium-photo/beautiful-girl-warm-sweater-hugs-her-favorite-cat-sitting-window-sill-open-window_613910-20250.jpg?w=826" alt=""/>
                               </Col>
                               <h4 className= "reviewName">Tricksteck</h4>
                               <p className={"reviewText"}>
                                   commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                   commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                   magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                   magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                   ultricies nec, pellentesque eu, pretium quis, sem.
                               </p>
                           </Row>
                       </div>

                   </Slider>
               </Container>
           </Fragment>
        );
    }
}
export default Reviews;