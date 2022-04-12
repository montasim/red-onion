import React from 'react';
import { Card } from 'react-bootstrap';
import image1 from '../../../Media/Images/carousel-1.png';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='m-3 p-3'>
            <Card>
                <Card.Img variant="top" src={image1} style={{ height: '350px' }} />
                <Card.Body>
                    <Card.Text className='text-center'>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Categories />
        </div >
    );
};

export default Home;