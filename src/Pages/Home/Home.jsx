import React from 'react';
import Hero from '../../components/Hero/Hero';
import DiscountSection from '../../components/DiscountSection/DiscountSection';
import { Helmet } from 'react-helmet-async';
import HomeCard from '../../components/HomeCard/HomeCard';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>Spicy King || Home</title>
                  </Helmet>
                  <Hero />
                  <DiscountSection />
                  <HomeCard/>
            </div>
      );
};

export default Home;