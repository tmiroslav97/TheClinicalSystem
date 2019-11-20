import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/user/actions';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    const handleLogin = () => {
        dispatch(
            loginUser({
                username,
                password
            })
        );
    };

    return (
        <Container>
            <Row>
                <Col md={{ span:3, offset: 3 }} xs={12}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" 
                                onChange={( { currentTarget } ) => {
                                    setUsername(currentTarget.value);
                            }} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                                onChange={( { currentTarget } ) => {
                                    setPassword(currentTarget.value);
                            }} />
                        </Form.Group>
                        <Button variant="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default LoginPage;
