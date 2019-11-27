import React from 'react';
import {Container, Row, Spinner} from 'react-bootstrap';

function FreeApointment(){
    return(
        <Container>
            <Row>
                <h3>Free appointments - in progress</h3>
            </Row>
            <Row>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
            </Row>
        </Container>
    );
}

export default FreeApointment;