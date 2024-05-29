import React from 'react';
import AboutBanner from './AboutComponent/AboutBanner';
import AboutCard from './AboutComponent/AboutCard/AboutCard';
import AboutStory from './AboutComponent/AboutStory/AboutStory';
import DeliciousFood from './AboutComponent/DeliciousFood/DeliciousFood';

const About = () => {
    return (
        <div>
            <AboutBanner /> 
            <AboutCard/>
            <AboutStory/>
            <DeliciousFood/>
        </div>
    );
};

export default About;