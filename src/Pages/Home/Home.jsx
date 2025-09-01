import React from 'react';
import Banner from './Banner/Banner';
import Catagory from './Catagory/Catagory';
import PopularManu from './Catagory/PopularManu/PopularManu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularManu></PopularManu>
        </div>
    );
};

export default Home;