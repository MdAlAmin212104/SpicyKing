import React from 'react';
import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet-async';
import DisplayCard from './DisplayCard/DisplayCard';
const AllFoods = () => {
      return (
            <div>
                  <Helmet>
                        <title>Spicy King || AllFoods</title>
                  </Helmet>
                  <Banner />
                  <DisplayCard/>
            </div>
      );
};

export default AllFoods;