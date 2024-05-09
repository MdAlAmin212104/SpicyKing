import React from 'react';
import Banner from '../AllFoods/Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
      return (
            <div>
                  <Helmet>
                        <title>Spicy King || Gallery</title>
                  </Helmet>
                  <Banner/>
            </div>
      );
};

export default Gallery;