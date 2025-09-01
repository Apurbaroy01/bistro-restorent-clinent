import React from 'react';
import Banner from './Banner/Banner';
import Catagory from './Catagory/Catagory';
import PopularManu from './Catagory/PopularManu/PopularManu';
import Featured from './Featured/Featured';
import Testimonious from './Testimonious/Testimonious';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro || Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <Testimonious></Testimonious>
        </div>
    );
};

export default Home;