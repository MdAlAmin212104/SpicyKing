import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';
import UserAddedList from '../../../components/UserAddedList/UserAddedList';
import Swal from 'sweetalert2';

const AddedFood = () => {
      const {user} = useContext(AuthContext)
      const [userAdd, setUserAdd] = useState([])
      useEffect(() => {
            const getData = async () => {
                  const { data } = await axios.get(`${import.meta.env.VITE_URL}/sportByEmail/${user?.email}`, {withCredentials: true})
                  setUserAdd(data)
            }
            getData()
      }, [user])

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
                        fetch(`${import.meta.env.VITE_URL}/delete/${id}`, {
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
                                    const remaining = userAdd.filter(product => product._id !== id);
                                    setUserAdd(remaining);

                              })
                  }
            });
      }



      return (
            <div>
                  <Helmet>
                        <title>Spicy King || Added Product</title>
                  </Helmet>
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
                                    userAdd.map(list => <UserAddedList
                                          key={list._id}
                                          list={list}
                                          handleDelate={handleDelate}
                                    />)        
                              }
                              
                        </tbody>
                        
                        
                        </table>
                  </div>
            </div>
      );
};

export default AddedFood;