import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {FaAssistiveListeningSystems, FaBreadSlice, FaCookie, FaEgg, FaFish, FaPastafarianism, FaPoop} from 'react-icons/fa';
import ReactPlayer from 'react-player';

const OpenHour = () => {
    return (
        <Row>
            <div>
                <p className='fw-bold text-center text-success'><small>What you Like in
                </small></p>
                <h3 className='fw-bold text-center mb-5'>DELICIOUS RECIPE</h3>
            </div>
            <Col sm>
                <div className='shadow'>
                    <div className='bg-danger text-center text-light py-3' style={{fontSize: '4rem'}}>
                        <FaFish></FaFish>
                    </div>
                    <h3 className='text-center text-dark fw-bold py-3'>Fish</h3>
                </div>
            </Col>
            <Col sm>
                <div className='shadow'>
                    <div className='bg-info text-center text-light py-3' style={{fontSize: '4rem'}}>
                        <FaAssistiveListeningSystems></FaAssistiveListeningSystems>
                    </div>
                    <h3 className='text-center text-dark fw-bold py-3'>Pasta</h3>
                </div>
            </Col>
            <Col sm>
                <div className='shadow'>
                    <div className='bg-success text-center text-light py-3' style={{fontSize: '4rem'}}>
                        <FaPastafarianism></FaPastafarianism>
                    </div>
                    <h3 className='text-center text-dark fw-bold py-3'>Meat</h3>
                </div>
            </Col>
            <Col sm>
                <div className='shadow'>
                    <div className='bg-primary text-center text-light py-3' style={{fontSize: '4rem'}}>
                        <FaEgg></FaEgg>
                    </div>
                    <h3 className='text-center text-dark fw-bold py-3'>Sneaks</h3>
                </div>
            </Col>
            <Col sm>
                <div className='shadow'>
                    <div className='bg-secondary text-center text-light py-3' style={{fontSize: '4rem'}}>
                        <FaCookie></FaCookie>
                    </div>
                    <h3 className='text-center text-dark fw-bold py-3'>Vegetable</h3>
                </div>
            </Col>

        </Row>


    );
};

export default OpenHour;