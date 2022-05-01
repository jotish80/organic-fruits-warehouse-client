import React from 'react';
import Banner from '../Banner/Banner';
import Farmers from '../Farmers/Farmers';
import Items from '../Items/Items';
import OurProduct from '../OurProducts/OurProduct';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <OurProduct />
            <Farmers />
        </div>
    );
};

export default Home;