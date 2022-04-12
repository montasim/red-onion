import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className='my-5 d-flex items-center justify-content-center'>
            {
                categories.map((category, index) => <Category key={index} category={category} />)
            }
        </div>
    );
};

export default Categories;