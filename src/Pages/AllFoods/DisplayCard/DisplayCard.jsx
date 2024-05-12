import React, { useEffect, useState } from 'react';
import HomeSingleCard from '../../../components/HomeSingle/HomeSingleCard';
import axios from 'axios';

const DisplayCard = () => {
      const [cardDisplay, setCardDisplay] = useState([])
      const [search, setSearch] = useState('')

      useEffect(() => {
            const getData = async () => {
                  const { data } = await axios.get(`${import.meta.env.VITE_URL}/food?search=${search}`)
                  setCardDisplay(data)
            }
            getData()
      }, [search])



      const handleSearch = (e) => {
            e.preventDefault();
            const form = e.target
            const search = form.search.value;
            setSearch(search);
      }

      console.log(search);

      return (
            <div className='mt-8'>
                  <form onSubmit={handleSearch} className='flex my-4 justify-end'>
                        <label className="input input-bordered flex items-center gap-2">
                              <input type="text" name='search' className="grow" placeholder="Search" />
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                        <button className='btn ml-6'>Search</button>
                  </form>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                        {
                              cardDisplay.map(card => <HomeSingleCard key={card._id} card={card} />)
                        }
                  </div>
            </div>
      );
};

export default DisplayCard;