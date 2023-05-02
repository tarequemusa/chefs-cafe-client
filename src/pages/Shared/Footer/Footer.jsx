

const Footer = () => {
    return (
        <div className="bottom">
            <footer className="page-footer font-small blue pt-5 bg-success position-static mt-0">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3 px-5">
                            <h5 className="text-uppercase text-warning fw-bold">The Chefs Cafe</h5><hr />
                            <p className="text-warning">The Chefs Cafe website is a food blog and recipe sharing platform that focuses on providing its visitors with high-quality content related to food and cooking. </p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-light fw-bold">About<hr /></h5>
                            <ul className="list-unstyled">
                                <li><a className="text-warning" href="#!">Link 1</a></li>
                                <li><a className="text-warning" href="#!">Link 2</a></li>
                                <li><a className="text-warning" href="#!">Link 3</a></li>
                                <li><a className="text-warning" href="#!">Link 4</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-light fw-bold">GET TO KNOW US<hr /></h5>
                            <ul className="list-unstyled">
                                <li><a className="text-warning" href="#!">Link 1</a></li>
                                <li><a className="text-warning" href="#!">Link 2</a></li>
                                <li><a className="text-warning" href="#!">Link 3</a></li>
                                <li><a className="text-warning" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3 text-light"><hr />© 2023 Copyright: {' '}
                    <a className="text-light" href="#">The Chefs Cafe</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;