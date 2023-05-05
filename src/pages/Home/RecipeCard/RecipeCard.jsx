import React, {useState} from 'react';
import {Button, Card, Col, Row, Table, Toast} from 'react-bootstrap';
import {FaBreadSlice, FaCalendar, FaHeart, FaRegStar, FaStar} from 'react-icons/fa';
import {Rating} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecipeCard = ({recipe}) => {
    const {picture, name, short_bio, recipe_name, likes, ingredients, cooking_method, years_of_experience, rating, num_recipes} = recipe;
    // <img src={recipe.banner} alt="" />
    const [show, setShow] = useState(false);

    return (
        <>
            <>
                <Card className='my-2'>
                    <Card.Header>
                        <h4><span className='d-flex justify-content-start text-success fw-bold'>{name}</span></h4>
                        <Row xs={1}>
                            <div className='d-flex'>
                                <p className='fw-bold px-4 rounded py-1'><small><span className='text-danger'><FaHeart /></span>{' '}Likes: {' '}{likes}</small></p>
                                <p className='fw-bold mx-2 px-4 rounded py-1'><small><span className='text-danger'><FaCalendar /></span>{' '}Years of Experience: {' '} {years_of_experience}</small></p>
                                <p className='fw-bold px-4 rounded py-1'><small><span className='text-danger'><FaBreadSlice /></span>{' '}Numbers of Recipes: {' '}{num_recipes}</small></p>
                            </div>
                        </Row>

                    </Card.Header>
                    <Row className='d-flex mx-auto justify-content-center' xs={1} md={2}>
                        <Col>
                            <img className='w-50 mb-3 mx-auto d-flex justify-content-between ml-0' src={picture} alt="" />
                        </Col>
                        <Col xs={8}>
                            <p className='mt-3'>{short_bio}</p>
                        </Col>
                    </Row>
                </Card>
            </>
            <Row>
                <Card className="text-center mb-4">
                    <Card.Footer className="text-muted">
                        <h4 className='fw-bold border-bottom mb-3 mx-0 text-start text-success'>The Chefs Cafe: Recipe Details</h4>
                        <Card.Title><span className='fw-bold text-success'>Recipe Name:</span>{' '}{recipe_name}</Card.Title>
                        <Card.Text>
                            <span className='fw-bold text-success'>Cooking Method:</span> {' '}{[cooking_method]}
                        </Card.Text>
                        <span className='fw-bold text-success'>Ingredients:</span> {' '} {ingredients}
                        <Row className='d-flex flex-column justify-content-center text-center'>

                            <Col className='d-flex mt-4 justify-content-between'>
                                <div className='w-25 d-flex align-items-center'>
                                    <Rating>
                                        placeholderRating={rating}
                                        readonly
                                        emptySymbol={<FaRegStar />}
                                        placeholderSymbol={<FaStar className='text-warning' />}
                                        fullSymbol={<FaStar />}
                                    </Rating>
                                    <span className='fw-bold mt-2'>{rating}</span>
                                </div>
                                <Button onClick={() => setShow(true)}><small><FaHeart />{' '}Favourite {' '}</small></Button>
                            </Col>
                            <Col className='mt-3 text-center'>
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
            {/* <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            {Array.from({length: 12}).map((_, index) => (
                                <th key={index}>Table heading</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {Array.from({length: 12}).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>2</td>
                            {Array.from({length: 12}).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>3</td>
                            {Array.from({length: 12}).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </Row> */}
        </>

    );
};

export default RecipeCard;