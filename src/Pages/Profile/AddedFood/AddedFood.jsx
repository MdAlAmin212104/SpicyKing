import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';
import UserAddedList from '../../../components/UserAddedList/UserAddedList';

const AddedFood = () => {
      const {user} = useContext(AuthContext)
      const [userAdd, setUserAdd] = useState([])
      useEffect(() => {
            const getData = async () => {
                  const { data } = await axios.get(`${import.meta.env.VITE_URL}/sportByEmail/${user?.email}`)
                  setUserAdd(data)
            }
            getData()
      }, [user])

      console.log(userAdd);
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
                                    userAdd.map(list => <UserAddedList key={list._id} list={list} />)        
                              }
                              
                        </tbody>
                        
                        
                        </table>
                  </div>
            </div>
      );
};

export default AddedFood;