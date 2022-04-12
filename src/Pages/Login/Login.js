import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

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
                </Form>
            </Container>
        </div>
    );
};

export default Login;