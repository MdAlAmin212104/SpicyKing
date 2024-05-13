import moment from 'moment';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Purchase = () => {
      const purchase = useLoaderData()
      const { user } = useContext(AuthContext)
      const { name, price, origin, buyer } = purchase;
      const userEmail = user.email;
      
      const handlePurchase = e => {
            e.preventDefault();
            if (user.email === buyer.email) {
                  return Swal.fire('you can not purchase yourself product')
            }
            const quantity = parseInt(e.target.quantity.value);
            const date = e.target.date.value;
            const purchase = {name, price, date, origin, buyer, userEmail, quantity}

            
            axios.post(`${import.meta.env.VITE_URL}/purchase`, purchase, {withCredentials: true}) 
                  .then(res => {
                        //console.log(res.data);
                        if (res.data.modifiedCount === 0) {
                              Swal.fire('data added to database successfully')
                        }
                        else if (res.data.modifiedCount > 0) {
                              Swal.fire('data modified to database successfully')
                        }
                  }) 
      }

      return (
            <div>
                  
                  <form onSubmit={handlePurchase} className="card-body">
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
                                    <input type="text" name='quantity' defaultValue={1} className="input input-bordered" required />
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

                 
           </div>
      );
};

export default Purchase;