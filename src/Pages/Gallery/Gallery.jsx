import React, { useEffect, useState } from 'react';
import Banner from '../AllFoods/Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Photo from '../../components/Photo/Photo';
import axios from 'axios';

const Gallery = () => {
      const [photo, setPhoto] = useState([])
      useEffect(() => {
            const getData = async () => {
                  const { data } = await axios.get(`${import.meta.env.VITE_URL}/images`)
                  setPhoto(data)
            }
            getData()
      }, [])
      return (
            <div>
                  <Helmet>
                        <title>Spicy King || Gallery</title>
                  </Helmet>
                  <Banner />
                  <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-8'>
                        {
                              photo.map(photo => <Photo key={photo._id} photo={photo} />)
                        }
                  </div>
            </div>
      );
};

export default Gallery;