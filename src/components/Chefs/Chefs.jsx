import React, {useEffect, useState} from 'react';
import {Button, Card, Image, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Chefs = () => {
    const [chefDetails, setChefDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefsdetails/')
            .then(res => res.json())
            .then(data => setChefDetails(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <div className='my-5'>
                <h4 className='text-center fw-bold underline'>OUR EXPERT CHEFS</h4>
                <p className='text-center fw-bold text-success shadow'><small>PROFESSIONAL COOK TEAM<hr /></small></p>
            </div>
            <Row xs={1} md={2} lg={3} className="d-flex flex-row mx-auto">
                {
                    chefDetails.map(details => <Card className='shadow'
                        key={details.id}
                    >
                        {/* <Card.Img className='mt-2 d-flex justify-content-center' variant="top" src={`${ details.picture }`} /> */}
                        <div className='d-flex justify-content-center'>
                            <Image className="border border-success w-75 mt-2" src={`${ details.picture }`} roundedCircle />
                        </div>
                        <Card.Body>
                            <Card.Title className='fw-bold text-success'>{`${ details.name }`}</Card.Title>
                            <p className='fw-bold text-primary border-bottom'><small>Area of Expertise: {' '}{`${ details.area_of_expertise }`}</small></p>
                            <div className='d-flex align-items-center gap-2 mt-4'>
                                <Button variant="outline-danger" className='fw-bold outline-danger px-4 rounded py-1'><small>Years of Experience: {' '} {details.years_of_experience}</small></Button>
                                <Button variant="outline-danger" className='fw-bold px-4 rounded py-1'><small>Numbers of Recipes: {' '}{details.num_recipes}</small></Button>
                            </div>
                            <Card.Text className='d-flex justify-content-center w-100 mt-3'>
                                <Button variant="outline-success" className='fw-bold mx-2 w-100 mx-auto rounded'><small>Likes: {' '}{details.likes}</small></Button>
                            </Card.Text>
                            <Link className='d-flex justify-content-center my-4' to={`/details/${ details.id }`}><Button className='border w-100 mt-4 p-2 rounded="lg" bg-primary text-white text-center'>View Recipes</Button></Link>
                        </Card.Body>
                    </Card>)
                }
            </Row>
        </div>
    );
};

export default Chefs;