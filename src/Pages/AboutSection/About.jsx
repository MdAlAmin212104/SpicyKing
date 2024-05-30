import React from 'react';
import AboutBanner from './AboutComponent/AboutBanner';
import AboutCard from './AboutComponent/AboutCard/AboutCard';
import AboutStory from './AboutComponent/AboutStory/AboutStory';
import DeliciousFood from './AboutComponent/DeliciousFood/DeliciousFood';
import ChefSection from './AboutComponent/ChefSection/ChefSection';
import Review from '../Home/HomeComponents/Review/Review';
import BlogContent from '../Home/HomeComponents/BlogContent/BlogContent';

const About = () => {
    return (
        <div>
            <AboutBanner /> 
            <AboutCard/>
            <AboutStory/>
            <DeliciousFood/>
            <ChefSection/>
            <Review/>
            <BlogContent/>
        </div>
    );
};

export default About;