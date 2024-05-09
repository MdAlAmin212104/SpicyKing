import React from 'react';
import Banner from './Banner/Banner';
import { Helmet } from 'react-helmet-async';
const AllFoods = () => {
      return (
            <div>
                  <Helmet>
                        <title>Spicy King || AllFoods</title>
                  </Helmet>
                  <Banner/>
            </div>
      );
};

export default AllFoods;