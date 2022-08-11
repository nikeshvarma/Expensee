import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Form } from 'react-bootstrap';
import '../../style/Auth.css';

const Login = () => {
    return (
        <Container>
            <div className='form-wrapper'>
                <div className="col-md-4 mx-auto">
                    <Card>
                        <Card.Body>
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Login</h1>
                                </div>
                            </div>

                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </div>

                            <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn btn-success">Login</button>
                            </div>

                            <div className="col-md-12 ">
                                <div className="login-or">
                                    <hr className="hr-or" />
                                    <span className="span-or">OR</span>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <p className="text-center">
                                    <Link to="/login">Login using Google</Link>
                                </p>
                            </div>

                            <div className="form-group">
                                <p className="text-center">Don't have account? <Link to="/signup">Sign up here</Link></p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container >
    )
}

export default Login;