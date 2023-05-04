import {Row} from 'react-bootstrap';
import {FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bottom">
            <footer className="page-footer font-small blue pt-5 bg-success position-static mt-0">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3 px-5">
                            <h5 className="text-uppercase text-warning fw-bold"><span className='border bg-primary text-light fw-bold px-3 py-1'>The Chefs</span> <span className='border bg-dark text-light fw-bold px-3 py-1'>CAFE</span></h5><hr />
                            <p className="text-warning">The Chefs Cafe website is a food blog and recipe sharing platform that focuses on providing its visitors with high-quality content related to food and cooking. </p>
                            <h4 className='fw-bold border-bottom shadow py-4'>Follow Us On:{' '}
                                <Row className='display-6' xs={1} md={2} lg={6} >
                                    <Link className='text-light' to="#"><FaFacebook /></Link><Link className='text-light' to="#"><FaTwitter /></Link><Link className='text-light' to="#"><FaInstagram /></Link><Link className='text-light' to="#"><FaYoutube /></Link><Link className='text-light' to="#"><FaLinkedin /></Link><Link className='text-light' to="#"><FaTiktok /></Link>
                                </Row></h4>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-light fw-bold">About<hr /></h5>
                            <ul className="list-unstyled">
                                <li><a className="text-warning" style={{textDecoration: 'none'}} href="/">Company Profile</a></li>
                                <li><a className="text-warning" style={{textDecoration: 'none'}} href="/">Vission</a></li>
                                <li><a className="text-warning" style={{textDecoration: 'none'}} href="/">Mission</a></li>
                                <li><a className="text-warning" style={{textDecoration: 'none'}} href="/">Team</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-light fw-bold">GET TO KNOW US<hr /></h5>
                            <ul className="list-unstyled">
                                <li><a className="text-warning" style={{textDecoration: 'none'}} href="/">Delivery Process</a></li>
                                <li><a className="text-warning" style={{textDecoration: 'none'}} href="/">Event</a></li>
                                <li><a className="text-warning" style={{textDecoration: 'none'}} href="/">Recipe</a></li>
                                <li><a className="text-warning" style={{textDecoration: 'none'}} href="/">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-dark footer-copyright text-center text-light pb-3"><hr />© 2023 Copyright: {' '}
                    <a className="text-light" href="/">The Chefs Cafe</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;