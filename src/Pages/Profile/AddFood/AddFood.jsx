import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AddFood = () => {

      const { user } = useContext(AuthContext) 

      const handleAddFood = e => {
            e.preventDefault();
            const form = e.target
            const name = form.name.value;
            const category = form.category.value;
            const price = form.price.value;
            const quantity = form.quantity.value;
            const origin = form.origin.value;
            const buyer = {
                  name: user?.displayName,
                  email: user?.email,
            }
            const photo = form.photo.value
            const desc = form.desc.value
            console.log({name, category, price, quantity, origin, buyer, photo, desc});
      }
      return (
            <div>
                  <Helmet>
                        <title>Spicy King || Add-product</title>
                  </Helmet>
                  <div className='bg-[#F4F3F0] p-8'>
                        <h3 className="lg:text-5xl text-2xl text-center poppins font-bold mt-8">Add New Food</h3>
                        <p className="text-xl font-medium lg:w-2/3 text-center mx-auto pt-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>



                  <form onSubmit={handleAddFood} className="card-body">
                              <div className='grid md:grid-cols-2 gap-4'>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Food-name :</span>
                                          </label>
                                          <input type="text" name='name' placeholder="Food Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Category :</span>
                                          </label>
                                          <select name='category' id='category' className='input input-bordered'
                                          >
                                          <option value='Dairy'>Dairy & Cheese</option>
                                          <option value='Fruits & vegetables'>Fruits & Vegetables</option>
                                          <option value='Meat & poultry'>Meat & Poultry</option>
                                          <option value='Snacks $ sweets'>Snacks & Sweets</option>
                                          <option value='Frozen foods'>Frozen Foods</option>
                                          </select>
                                    </div>
                                    
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Price :</span>
                                          </label>
                                          <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Quantity :</span>
                                          </label>
                                          <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" required />
                                    </div>
                                    
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Added By :</span>
                                          </label>
                                          <input type="text" name='buyer' defaultValue={user?.displayName || user?.email} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Food Origin :</span>
                                          </label>
                                          <input type="text" name='origin' placeholder="Country Name " className="input input-bordered" required />
                                    </div>
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Photo URL :</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Description :</span>
                                    </label>
                                    <textarea name="desc" id="" cols="30" rows="10" placeholder='description......'  className="rounded-3xl p-4"></textarea>
                                    
                              </div>
                              <input type="submit" value='Add Food' className='btn bg-[#D2B48C] my-4 text-xl' />
                                          
                        </form>
                  </div>
            </div>
      );
};

export default AddFood;