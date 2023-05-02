import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <Container>
            <div>
                <Row className='d-flex mx-auto justify-content-center' xs={1} md={2}>
                    <Col>
                        <img className='w-75 my-5 mx-auto d-flex justify-content-center' src="https://i.ibb.co/0sdg4tz/Chef-Special-Salad-Discount-Instagram-Advertisement-Post.png" alt="" />
                    </Col>
                    <Col xs={8}>
                        <h2 className='fw-bold border-bottom my-5 mx-0'>The Chefs Cafe</h2>
                        <p>The <Link to="/">Chefs Cafe</Link> is the go-to spot for experiencing the best of Italys food culture. From authentic Neapolitan pizza to homemade pasta dishes, Chef Cafe has mastered the art of cooking up traditional Italian cuisine. Using only the freshest ingredients and time-honored recipes, Chef Cafe has built a reputation for delivering an exceptional dining experience to locals and tourists alike. With their passion for great food, its no surprise that they have become one of Italys most renowned culinary destinations. So if you are</p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default About;