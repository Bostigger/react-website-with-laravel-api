import React, {Component, Fragment} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Bar, ResponsiveContainer, BarChart, XAxis, Tooltip, Legend} from "recharts";

class Analysis  extends Component{
    constructor(props) {
        super(props);

         this.state= {
             chartData:[
                 {Technology:"PHP", Projects:"100"},
                 {Technology:"Laravel", Projects:"90"},
                 {Technology:"React", Projects:"89"},
                 {Technology:"JS", Projects:"89"},
                 {Technology:"Flutter", Projects:"85"},
                 {Technology:"Firebase", Projects:"75"},
                 {Technology:"Mysqli", Projects:"80"},
             ]
         }

    }
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className= "serviceHeader text-center">our stack</h2>
                    <div className="bottom-line"></div>
                    <Row>
                        <Col style={{width:"50%" ,height:"430px"}} lg={6} md={12} sm={12}>

                            <ResponsiveContainer>
                                <BarChart width={150} height={40} data={this.state.chartData}>

                                    <XAxis dataKey={"Technology"}/>
                                    <Tooltip/>

                                    <Bar dataKey="Projects" fill = "#011025" />

                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12} >
                          <p className="serviceText" style={{textAlign:"justify"}}>
                              orem ipsum dolor sit amet, consectetuer adipiscing elit. A
                              enean commodo ligula eget dolor. Aenean massa. Cum
                              sociis natoque penatibus et magnis dis parturient montes
                              , nascetur ridiculus mus. Donec quam felis, ultricies nec,
                              pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                              tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
                              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                              nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                              rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
                              nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                              Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                              Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo
                              eget bibendum sodales, augue velit cursus nunc,
                          </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default Analysis;