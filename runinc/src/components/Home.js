import React from 'react'
import Cover from '../components/Cover';
import Event from '../components/Event/Event';
import Shop from '../components/Shop/Shop';
import Contact from '../components/Contact/Contact';
import './scss/home.scss';

const Home = () => {
    return (
        <div className="wrapper">
            <Cover />
            <Event />
            <Shop />
            <Contact />
        </div>
    )
}

export default Home;
