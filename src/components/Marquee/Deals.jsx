import React from 'react';
import {Image} from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Deals = () => {
    return (
        <>
            <div className='my-4 pt-5 bg-light'>
                <h4 className='text-center fw-bold underline mt-4'>SPECIAL DISHES TODAY</h4>
                <p className='text-center fw-bold text-success mb-4'><small>LETS DISCOVER FOOD<hr /></small></p>
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










