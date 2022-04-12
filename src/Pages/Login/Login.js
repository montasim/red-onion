import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.Init';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navaigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const from = location?.state?.from?.pathname || '/home';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        console.log(user);
        navaigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='my-5 w-lg-50'>
            <Container>
                <h2 className='mb-4 text-primary'>Please Login Here</h2>
                <Form onSubmit={handleUserSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>... loading</p>
                    }
                    <p>New to Red Onion <span className='text-primary'><a href="/signup">Please Signup Here</a></span></p>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <div className='mt-5 row gap-2'>
                        <Button className='items-center' variant="secondary"><AiFillGoogleCircle className='me-2' />Continue With Google</Button>
                        <Button className='items-center' variant="secondary"><AiOutlineGithub className='me-2' />Continue With Github</Button>
                        <Button className='items-center' variant="secondary"><FaFacebookF className='me-2' />Continue With Facebook</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Login;