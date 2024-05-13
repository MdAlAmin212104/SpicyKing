import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HomeSingleCard from '../HomeSingle/HomeSingleCard';
import { Link } from 'react-router-dom';

const HomeCard = () => {
      const [card, setCard]= useState([])

      useEffect(() => {
            const getData = async () => {
                  const { data } = await axios.get(`${import.meta.env.VITE_URL}/food`);
                  setCard(data)
            }
            getData()
      }, [])
      
      const card6 = card.slice(0, 6);
      return (
            <div className='mt-6'>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                        {
                              card6.map(card => <HomeSingleCard key={card._id} card={card} />)
                        }
                  </div>
                  <div className='flex justify-center'>
                        <Link to='/foods'><button className='btn btn-info my-6'>See All</button></Link>
                  </div>
            </div>
      );
};

export default HomeCard;