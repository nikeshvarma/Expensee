import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Form } from 'react-bootstrap';
import '../../style/Auth.css';

const Signup = () => {
    return (
        <Container>
            <div className='form-wrapper'>
                <div className="col-md-4 mx-auto">
                    <Card>
                        <Card.Body>
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Sign Up</h1>
                                </div>
                            </div>

                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Check type="checkbox" label="I am accepting terms & condtions" />
                                </Form.Group>
                            </div>

                            <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn btn-primary">Create New Account</button>
                            </div>

                            <div className="col-md-12 ">
                                <div className="login-or">
                                    <hr className="hr-or" />
                                    <span className="span-or">OR</span>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <p className="text-center">
                                    <Link to="#">
                                        Signup using Google
                                    </Link>
                                </p>
                            </div>

                            <div className="form-group">
                                <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container >
    )
}

export default Signup;