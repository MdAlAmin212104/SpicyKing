import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsCard = () => {
      const card = useLoaderData()

      const { _id, name, category, price, quantity, origin, buyer, photo, desc } = card;
      return (
            <div className="card card-side bg-base-100 shadow-xl">
                  <figure className='md:w-1/2'><img src={photo} alt="Movie"/></figure>
                  <div className="card-body md:w-1/2">
                        <h2 className="card-title">{name}</h2>
                        <p>{desc}</p>
                        <div className='flex justify-around'>
                              <p>Price : {price}</p>
                              <p>Quantity : {quantity}</p>
                              <p>Origin : {origin}</p>
                              <p>category : {category}</p>
                        </div>
                        <p>Mode By : <span className='font-bold'>{buyer?.name}</span> Email: <span className='font-bold'>{ buyer?.email }</span></p>
                        <div className="card-actions justify-end">
                              <Link to={`/purchase/${_id}`}>
                                    <button className="btn btn-primary">Purchase</button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default DetailsCard;