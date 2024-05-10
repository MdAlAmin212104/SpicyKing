import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
      const updateProduct = useLoaderData()
      const {user} = useContext(AuthContext)
      console.log(updateProduct);
      const { _id, name, category, price, quantity, origin, buyer, photo, desc } = updateProduct;

      const handleUpdateProduct = (e) => {
            e.preventDefault();
            const form = e.target
            const name = form.name.value;
            const category = form.category.value;
            const price = form.price.value;
            const quantity = form.quantity.value;
            const origin = form.origin.value;
            const photo = form.photo.value;
            const desc = form.desc.value;
            const UpdateProduct = { name, category, price, quantity, photo, desc, origin, }
            
            console.log(updateProduct);

            // axios.post(`${import.meta.env.VITE_URL}/update/${_id}`, updateProduct )
            //       .then(res => console.log(res.data))

            
            
            
            fetch(`${import.meta.env.VITE_URL}/update/${_id}`, {
                  method: 'PATCH',
                  headers: {
                        "content-type": "application/json",
                  },
                  body: JSON.stringify(UpdateProduct)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount > 0) {
                              Swal.fire("this product database Update success!");
                              console.log(data);
                        }
                       
                  })
      }





      return (
            <div className='bg-[#F4F3F0] p-8'>
                  <h3 className="lg:text-5xl text-2xl text-center poppins font-bold mt-8">Update old Food</h3>
                  <p className="text-xl font-medium lg:w-2/3 text-center mx-auto pt-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>



                  <form onSubmit={handleUpdateProduct} className="card-body">
                        <div className='grid md:grid-cols-2 gap-4'>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Food-name :</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={name} className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Category :</span>
                                    </label>
                                    <select name='category' id='category' defaultValue={category}  className='input input-bordered'
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
                                          <span className="label-text text-xl font-semibold">Added By :</span>
                                    </label>
                                    <input type="text" name='buyer' defaultValue={buyer.name} className="input input-bordered" readOnly />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text text-xl font-semibold">Food Origin :</span>
                                    </label>
                                    <input type="text" name='origin' defaultValue={origin} className="input input-bordered" required />
                              </div>
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo URL :</span>
                              </label>
                              <input type="text" name='photo' defaultValue={photo} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Description :</span>
                              </label>
                              <textarea name="desc" id="" cols="30" rows="10" defaultValue={desc} className="rounded-3xl p-4"></textarea>
                              
                        </div>
                        <input type="submit" value='update Food' className='btn bg-[#D2B48C] my-4 text-xl' />
                                          
                  </form>
            </div>
      );
};

export default UpdateProduct;