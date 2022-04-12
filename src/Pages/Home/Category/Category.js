import React from 'react';
import { Badge } from 'react-bootstrap';

const Category = ({ category }) => {
    const { strCategory } = category;

    return (
        <Badge className='me-3 p-3' pill bg="secondary">
            {strCategory}
        </Badge>
    );
};

export default Category;