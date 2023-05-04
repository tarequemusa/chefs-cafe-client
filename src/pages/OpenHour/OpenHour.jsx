import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {FaAssistiveListeningSystems, FaBreadSlice, FaCookie, FaFish, FaPastafarianism, FaPoop} from 'react-icons/fa';
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
                <div className='bg-primary px-5 border border-success shadow'>
                    <div className='text-center text-light' style={{fontSize: '4rem'}}>
                        <FaFish></FaFish>
                    </div>
                    <h3 className='text-center text-light p-4 border rounded-circle fw-bold'>Fish</h3>
                </div>
            </Col>
            <Col sm><div className='bg-success px-5 border border-success shadow'>
                <div className='text-center text-light' style={{fontSize: '4rem'}}>
                    <FaCookie></FaCookie>
                </div>
                <h3 className='text-center text-light p-4 border rounded-circle fw-bold'>Sneaks</h3>
            </div></Col>
            <Col sm>
                <div className='bg-danger px-5 border border-success shadow'>
                    <div className='text-center text-light' style={{fontSize: '4rem'}}>
                        <FaPastafarianism></FaPastafarianism>
                    </div>
                    <h3 className='text-center text-light p-4 border rounded-circle fw-bold'>Meat</h3>
                </div>
            </Col>
            <Col sm>
                <div className='bg-info px-5 border border-success shadow'>
                    <div className='text-center text-light' style={{fontSize: '4rem'}}>
                        <FaAssistiveListeningSystems></FaAssistiveListeningSystems>
                    </div>
                    <h3 className='text-center text-light p-4 border rounded-circle fw-bold'>Pastas</h3>
                </div>
            </Col>
        </Row>


    );
};

export default OpenHour;