import React from 'react';
import { Row, Form, Col, Button, Container } from 'react-bootstrap';

function HolidayRequest(){
    return(
        <Container>
            <Row>
                <Col md={{ span:5, offset: 2 }} xs={12}>
                    <h3 className="border-bottom">Holiday Request</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span:4 , offset: 2}} xs={12}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Choose a day off:</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group> 
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button variant="primary" type="submit">
                                    Submit for approval
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    );
}

export default HolidayRequest;