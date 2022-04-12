import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='my-5 w-lg-50'>
            <Container>
                <h2 className='mb-4 text-primary'>Please Login Here</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
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