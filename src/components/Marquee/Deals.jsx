import React from 'react';
import {Container, Image} from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Deals = () => {
    return (
        <>
            <div className='mt-4 mb-4 p-3 shadow'>
                <Container className='d-flex justify-content-between align-items-center'>
                    <h4 className='fw-bold text-dark border rounded p-3'>RECIPE OF THE DAY</h4>
                    <h5 className='text-dark fw-bold text-success'>CHEF UNIQUE RECIPE</h5>
                </Container>
            </div>
            <Marquee className='my-5 d-flex justify-content-center' autofill={true} pauseOnHover={true} speed={100}>
                <Image className='w-75' src="https://i.ibb.co/5jfzWBc/a-1.png" rounded />
                <Image className='w-75' src="https://i.ibb.co/GCY4v67/a-9.png" rounded />
                <Image className='w-75' src="https://i.ibb.co/MckbMZX/a-8.png" rounded />
                <Image className='w-75' src="https://i.ibb.co/HHqKZG8/a-7.png" rounded />
                <Image className='w-75' src="https://i.ibb.co/qpJX1tT/a-6.png" rounded />
                <Image className='w-75' src="https://i.ibb.co/jLYZB03/a-5.png" rounded />
                <Image className='w-75' src="https://i.ibb.co/bFrtxqH/a-4.png" rounded />
                <Image className='w-75' src="https://i.ibb.co/MsvQWzK/a-3.png" rounded />
                <Image className='w-75' src="https://i.ibb.co/nRJnW2N/a-2.png" rounded />
            </Marquee>
        </>
    );
};

export default Deals;












