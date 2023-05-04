import React from 'react';
import {Link, useRouteError} from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Error = () => {
    const {error, status} = useRouteError()
    return (
        <><NavigationBar></NavigationBar>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center mt-5'>
                    <img className='w-50' src="https://i.ibb.co/kHvF7y9/Yellow-and-white-illustration-website-error-instagram-post-1.png" alt="" /><br />
                    <h2 className='fw-bold display-5 text-orange-500'>
                        <span className='sr-only'>Nothing matched your search criteria:</span>{' '}
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn btn-danger shadow bg-blue-500 rounded text-white p-3 mb-5'>
                        BACK TO HOMEPAGE
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Error;