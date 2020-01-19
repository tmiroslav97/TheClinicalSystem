import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorsData } from '../../store/doctors/actions';
import { doctorsDataSelector } from '../../store/doctors/selectors';

const DoctorSearch = () => {
    const dispatch = useDispatch();
    const doctors = useSelector(doctorsDataSelector);
    //eslint-disable-next-line
    const [name, setName] = useState();

    const handleSearch = () => {

    };

    useEffect(() => {
        dispatch(
            fetchDoctorsData({})
        );
    }, []);


    return (
        <Container>
            <Row>
                <h2 className="border-bottom">Doctors List</h2>
            </Row>
            <Row>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label>Search:</Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Search doctors" />
                        </Col>
                        <Button variant="primary" onClick={handleSearch}>
                            Search
                        </Button>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridState">
                        <Form.Label>Filter doctors by</Form.Label>
                        <Col>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Average rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            doctors.map((doctor, index) => {
                                return (
                                    <tr key={doctor.id}>
                                        <td>{index + 1}</td>
                                        <td>{doctor.firstName}</td>
                                        <td>{doctor.lastName}</td>
                                        <td>{doctor.sumRating / doctor.cntRating}</td>
                                    </tr>
                                );
                            })

                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    )

}

export default DoctorSearch;