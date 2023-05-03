import React from 'react';
import Header from '../pages/Shared/Header/Header';
import {Col, Container, Row} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';

const RecipeView = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecipeView;