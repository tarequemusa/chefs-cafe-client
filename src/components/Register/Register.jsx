import {useContext, useState} from "react";
import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
import app from "../../firebase/firebase.config";
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";
import {AuthContext} from "../../providers/AuthProvider";

const auth = getAuth(app);

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
        // Password Validate:
        if(!/(?=.*[A-Z])/.test(password)) {
            setError('Please add atleast one uppercase');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add atleast two numbers');
            return;
        }
        else if(password.length < 6) {
            setError('Please add atleast 6 characters in your password');
            return;
        }

        // Create user in Firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User Created Successfully');
                updateUserData(result.user, name);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);

            })
    }


    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        // setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
    }

    return (
        <div className="mx-auto w-full p-5 ">
            <h2 className="text-center text-info">Please Register</h2>
            <form className="justify-content-center d-flex flex-column" onSubmit={handleSubmit}>
                <input className="mx-2 p-2 w-50 mx-auto rounded" type="text" name="name" id="name" placeholder="Your name" required /><br />
                <input className="mx-2 p-2 w-50 mx-auto rounded" onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Your Email" required /><br />
                <input className="mx-2 p-2 w-50 mx-auto rounded" onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder="Your Password" required /><br />
                <input className="mx-2 p-2 w-50 mx-auto rounded" type="text" name="photo" id="photo" placeholder="Photo URL" required /><br />
                <Form.Check className="mx-auto" type="checkbox" name="accept" label="Accept Terms and Condition"></Form.Check>
                <input className="w-50 mx-auto btn btn-primary m-2 p-2 bg-primary rounded text-center text-white" type="submit" value="Register" />
            </form>
            <p className="text-center"><small>Already Have an Account? Please <Link to="/emaillogin">Login</Link> </small></p>
            <p className="text-danger text-center">{error}</p>
            <p className="text-success text center">{success}</p>
        </div >
    );
};

export default Register;