import React, {useState} from 'react';
import {Button, Card, Col, Row, Toast} from 'react-bootstrap';
import {FaBreadSlice, FaCalendar, FaHeart} from 'react-icons/fa';

const RecipeCard = ({recipe}) => {
    const {picture, name, short_bio, recipe_name, likes, ingredients, cooking_method, years_of_experience, num_recipes} = recipe;
    // <img src={recipe.banner} alt="" />
    const [show, setShow] = useState(false);
    return (
        <>
            <Row>
                <Card className="text-center mb-4">
                    <Card.Header>
                        <h4><span className='d-flex justify-content-start text-success fw-bold'>{name}</span></h4>
                    </Card.Header>
                    <Card.Body>
                        <Row className='d-flex mx-auto justify-content-center' xs={1} md={2}>
                            <Col>
                                <img className='w-50 mb-3 mx-auto d-flex justify-content-between ml-0' src={picture} alt="" />
                            </Col>
                            <Col xs={8}>
                                <h4 className='fw-bold border-bottom mb-3 mx-0 text-start text-success'>The Chefs Cafe: Short Bio</h4>
                                <p>{short_bio}</p>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Row>
                        <Card.Footer className="text-muted">
                            <Button variant="outline-dark" className='fw-bold px-4 rounded py-1'><small><FaHeart />{' '}Likes: {' '}{likes}</small></Button>
                            <Button variant="outline-dark" className='fw-bold mx-2 px-4 rounded my-1 py-1'><small><span className='text-danger'><FaCalendar /></span>{' '}Years of Experience: {' '} {years_of_experience}</small></Button>
                            <Button variant="outline-dark" className='fw-bold px-4 rounded py-1'><small><span className='text-danger'><FaBreadSlice /></span>{' '}Numbers of Recipes: {' '}{num_recipes}</small></Button>
                        </Card.Footer>
                    </Row>
                </Card>
            </Row>
            <Row>
                <Card className='p-4 mb-4'>
                    <Card.Body>
                        <h4 className='fw-bold border-bottom mb-3 mx-0 text-start text-success'>The Chefs Cafe: Recipe Details</h4>
                        <p>{short_bio}</p>
                        <Row>
                            <Card.Title><span className='fw-bold text-success'>Recipe Name:</span>{' '}{recipe_name}</Card.Title>
                            <Card.Text>
                                <span className='fw-bold text-success'>Cooking Method:</span> {' '}{[cooking_method]}
                            </Card.Text>
                            <span className='fw-bold text-success'>Ingredients:</span> {' '} {ingredients}
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Row className='d-flex flex-column justify-content-center text-center'>
                            <Col>
                                <Button onClick={() => setShow(true)}><small><FaHeart />{' '}Favourite: {' '}{likes}</small></Button>
                            </Col>
                            <Col className='mt-3'>
                                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                    <Toast.Header>
                                        <div className='text-danger display-6'>
                                            <FaHeart />
                                        </div>
                                        <strong className="me-auto text-center">{' '}{name}</strong>
                                    </Toast.Header>
                                    <Toast.Body className='bg-success text-light'>Wow, This recipe is your favorite!</Toast.Body>
                                </Toast>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Row>
        </>
    );
};

export default RecipeCard;