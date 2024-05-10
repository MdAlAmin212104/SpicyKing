import React, { useEffect, useState } from 'react';
import HomeSingleCard from '../../../components/HomeSingle/HomeSingleCard';
import axios from 'axios';

const DisplayCard = () => {
      const [cardDisplay, setCardDisplay]= useState([])

      useEffect(() => {
            const getData = async () => {
                  const { data } = await axios.get(`${import.meta.env.VITE_URL}/food`)
                  setCardDisplay(data)
            }
            getData()
      }, [])



      return (
            <div className='mt-8'>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                        {
                              cardDisplay.map(card => <HomeSingleCard key={card._id} card={card} />)
                        }
                  </div>
            </div>
      );
};

export default DisplayCard;