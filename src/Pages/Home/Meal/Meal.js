import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Meal = ({ meal }) => {
    const { strMeal, strMealThumb, idMeal } = meal;

    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='g-3 col-sm-12 col-md-6 col-lg-3 my-4'>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            Price: ${idMeal}
                        </Card.Text>
                        <Button variant="primary">Order Now</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Meal;