import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';
import UserOrderList from '../../../components/UserOrderList/UserOrderList';
import moment from 'moment';
import Swal from 'sweetalert2';

const OrderFood = () => {
      const { user } = useContext(AuthContext)
      const [order, setOrder] = useState([])

      useEffect(() => {
            const getData = async () => {
                  const { data } = await axios.get(`${import.meta.env.VITE_URL}/purchaseUserEmail/${user?.email}`, {withCredentials: true})
                  setOrder(data)
            }
            getData()
      }, [])

      const handleDelate = (id) => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`${import.meta.env.VITE_URL}/purchase/delete/${id}`, {
                              method: "DELETE",
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deleteCount > 0) {
                                         Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                          }); 
                                    }
                                    const remaining = order.filter(order => order._id !== id);
                                    setOrder(remaining);

                              })
                  }
            });
      }



      const totalQuantity = order.reduce((acc, obj) => acc + obj.quantity, 0);

      if (totalQuantity <= 0) {
            return <p>Your purchase order is not found</p>
      }
      else if (totalQuantity > 20) {
            return <p>Your can't purchase 20 more then product</p>
      } 
      
      return (
            <div>
                  <Helmet>
                        <title>Spicy King || Order Product</title>
                  </Helmet>
                  <div>
                        <p className='text-5xl text-center text-orange-500'>Your total selected Item : { totalQuantity }</p>
                  </div>
                  <div>
                        <div className="overflow-x-auto">
                              <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>
                                    <th>
                                    <label>
                                          <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                    <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                                order.map(list => <UserOrderList
                                                      key={list._id}
                                                      list={list}
                                                      handleDelate={handleDelate}
                                                />)        
                                    }
                                    
                              </tbody>
                              
                              
                              </table>
                        </div>
                        <div className='w-full'>
                              <label className="label">
                                    <span className="label-text text-xl font-semibold">Buying Date :</span>
                                    </label>
                                    <input type="text" name='date' defaultValue={moment().format("MMM Do YY")} className="input input-bordered" readOnly/>
                        </div>
                        
                  </div>
            </div>
      );
};

export default OrderFood;