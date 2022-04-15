import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Volunteer = ({ volunteer }) => {
    console.log(volunteer);
    const { name, img } = volunteer;

    return (
        <div>
            <Col sm={12} md={12}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>

            </Col>



        </div>
    );
};

export default Volunteer;