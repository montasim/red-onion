import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import auth from '../../Hooks/Firebase.Init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/login')
    }

    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Password Not Matched');
            return;
        }
        if (password.length < 6) {
            setError('Password Must Be 6 Characters Long');
            return;
        }

        createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log('user created');
            })
    }

    return (
        <div className='my-5 w-lg-50'>
            <Container>
                <h2 className='mb-4 text-primary'>Please Signup Here</h2>
                <Form onSubmit={handleCreateUser}>
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
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <p>Already A Member <span className='text-primary'><a href="/login">Login Here</a></span></p>
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

export default Signup;