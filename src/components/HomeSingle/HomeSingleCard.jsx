import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleCard = ({ card }) => {
      console.log(card);
      const {_id, name, price, photo, category} = card;
      return (
            <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                  <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                              <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                              <div className='flex justify-between'>
                                    <p>Category : {category}</p>
                                    <p>Price : ${ price }</p>
                              </div>
                        </div>
                        <Link to='/food/:id'>
                              <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 ">Read more</button>
                        </Link>
                  </div>
            </div>
      );
};

export default HomeSingleCard;