import moment from 'moment';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Purchase = () => {
      const purchase = useLoaderData()
      console.log(purchase);
      const { name, price, quantity, origin, buyer } = purchase;
      return (
            <form className="card-body">
                  <div className='grid md:grid-cols-2 gap-4'>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Food-name :</span>
                              </label>
                              <input type="text" name='name' defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Origin :</span>
                              </label>
                              <input type="text" name='category' defaultValue={origin} className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Price :</span>
                              </label>
                              <input type="text" name='price' defaultValue={price} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Quantity :</span>
                              </label>
                              <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Buyer Name:</span>
                              </label>
                              <input type="text" name='buyer' defaultValue={buyer?.name} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Buyer Email :</span>
                              </label>
                              <input type="text" name='origin' defaultValue={buyer?.email} className="input input-bordered" readOnly />
                        </div>
                  </div>
                  <div className='w-full'>
                        <label className="label">
                              <span className="label-text text-xl font-semibold">Buying Date :</span>
                              </label>
                              <input type="text" name='date' defaultValue={moment().format("MMM Do YY")} className="input input-bordered" readOnly/>
                  </div>
                  
                  
                  <input type="submit" value='Purchase' className='btn bg-[#D2B48C] my-4 text-xl' />
                              
            </form>
      );
};

export default Purchase;