import React, {useEffect, useState} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
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
            <h4 className='text-center fw-bold underline'>OUR EXPERT CHEFS</h4>
            {/* <p className='text-center fw-bold text-success shadow'><small><hr />PROFESSIONAL COOK TEAM<hr /></small></p> */}
            <Row xs={1} md={2} lg={3} className=" justify-content-center d-flex flex-row mx-auto">
                {
                    chefDetails.map(details => <Card className='shadow'
                        key={details.id}
                    >
                        <Card.Img className='mt-2 fluid d-flex justify-content-center' variant="top" src={`${ details.picture }`} />
                        <Card.Body>
                            <Card.Title className='fw-bold text-success'>{`${ details.name }`}</Card.Title>
                            <p className='fw-bold text-primary border-bottom'><small>Area of Expertise: {' '}{`${ details.area_of_expertise }`}</small></p>
                            <div className='d-flex align-items-center gap-2 mt-4'>
                                <Button variant="outline-danger" className='fw-bold outline-danger px-4 rounded py-1'><small>Years of Experience: {' '} {details.years_of_experience}</small></Button>
                                <Button variant="outline-danger" className='fw-bold px-4 rounded py-1'><small>Numbers of Recipes: {' '}{details.num_recipes}</small></Button>
                            </div>
                            <Card.Text className='d-flex justify-content-center w-100 mt-3'>
                                <Button variant="outline-success" className='fw-bold px-4 rounded py-1'><small>Likes: {' '}{details.likes}</small></Button>
                            </Card.Text>
                        </Card.Body>

                        <Link className='d-flex justify-content-center m-2' to={`/details/${ details.id }`}><button className='border mt-4 p-2 rounded bg-primary text-white text-center'>View Recipes</button></Link>
                    </Card>)
                }
            </Row>
        </div>
    );
};

export default Chefs;