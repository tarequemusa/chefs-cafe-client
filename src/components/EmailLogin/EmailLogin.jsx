import {getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import {useContext, useRef, useState} from "react";
import app from "../../firebase/firebase.config";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const auth = getAuth(app);

const EmailLogin = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        event.target.reset();
        setError('');
        setSuccess('');
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add atleast two uppercase');
            return;
        }
        else if(!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add a special character');
            return;
        }

        else if(password.length < 6) {
            setError('Password must be 6 characters long');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('User Login Successful');
                setError('');
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if(!email) {
            alert('Please provide your email address to reset password');
            return;

        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div className="w-50 mx-auto">
            <h2 className="text-center mt-3">Login to your Account!</h2>
            <form onSubmit={handleLogin} className="mb-4">
                <div className="form-group">
                    <label htmlFor="username">Email Address</label>
                    <input type="email" className="form-control" name="email" ref={emailRef} id="email" placeholder="Enter Your Email" required />
                </div>
                <div className="form-group">
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <label htmlFor="password">Password</label>
                        <p className="text-center"><small> <button onClick={handleResetPassword} className="btn btn-link">Forget Password</button></small></p>
                    </div>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter Your Password" required />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="remember-me" />
                    <label className="form-check-label" htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="btn btn-danger w-100 mx-auto">Login</button>
            </form>
            <p className="text-center"><small>New to this website? Please <Link to="/register">Register</Link> </small></p>
            <p className="text-danger">{error}</p>
            <p className="text-success">{success}</p>
        </div>
    );
};

export default EmailLogin;