import React from 'react';
import Landing from './Landing';
import Skills from './Skills';
import Intro from './Intro';


const Home = () => {
    return (
        <React.Fragment>
            <Landing />
            <Intro />
            <Skills />
        </React.Fragment>
    )
};

export default Home;