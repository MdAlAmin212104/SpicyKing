import React from 'react';

const UserAddedList = ({ list }) => {
      console.log(list);
      const {_id, photo, name, origin, price, quantity, buyer} = list;
      return (
                  <tr>
                        <th>
                              <label>
                                    <input type="checkbox" className="checkbox" />
                              </label>
                        </th>
                        <td>
                              <div className="flex items-center gap-3">
                                    <div className="avatar">
                                          <div className="mask mask-squircle w-12 h-12">
                                                <img src={photo} />
                                          </div>
                                          </div>
                                          <div>
                                          <div className="font-bold">{name}</div>
                                          <div className="text-sm opacity-50">{origin}</div>
                                    </div>
                              </div>
                        </td>
                        <td>
                              Price {price}
                        </td>
                        <td>{quantity}</td>
                        <th>
                              <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                  </tr>
      );
};

export default UserAddedList;