import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Volunteer from '../Volunteer/Volunteer';

const ShowVolunteer = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/volunteer')
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, [])

    return (
        <Container style={{ marginTop: '-70px' }}>
            <Row md={4}>

                {
                    volunteers.map(volunteer => <Volunteer
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Volunteer>)
                }
            </Row>
        </Container>




    );
};

export default ShowVolunteer;