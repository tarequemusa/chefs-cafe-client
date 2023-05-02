import React, {useState} from 'react';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';
import {Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaEnvelope, FaGithub, FaGoogle} from 'react-icons/fa';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githhubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log("error", error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githhubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container>
            <div className="mx-auto my-5">
                <h4 className="text-center mt-3 fw-bold border-bottom mb-4">Login to your Account</h4>
                {
                    user ?
                        <button className='btn outline-secondary' onClick={handleSignOut}>Sign Out</button> :
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className='my-1 border w-50 rounded bg-success text-center py-2'>
                                <button className='btn btn-outline mx-2'><Link className="text-light" style={{textDecoration: 'none'}} to="/emaillogin"><FaEnvelope /> Login with Email/Password</Link></button>
                            </div>
                            <div className='my-3'>
                                <p><small>New to this website? Please <Link to="/register">Register</Link> </small></p>
                            </div>
                            <Row>
                                <div className='my-3'>
                                    <h5 className='text-center fw-bold'>OR</h5>
                                </div>
                            </Row>
                            <div className='my-1 border w-50 rounded bg-primary px-4 text-center py-2'>
                                <button className='btn btn-outline mx-2 px-4 text-light' onClick={handleGoogleSignIn}><FaGoogle /> Login with Google</button>
                            </div>
                            <div className='my-1 mx-5 border w-50 rounded bg-dark px-4 text-center py-2'>
                                <button className='btn btn-outline mx-2 px-4 text-light' onClick={handleGithubSignIn}><FaGithub /> Login with Github</button>
                            </div>
                        </div>
                }
                {user && <div>
                    <h3>User: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>}
            </div>
        </Container>
    );
};

export default Login;