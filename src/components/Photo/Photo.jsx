import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Photo = ({ photo }) => {
      const { user } = useContext(AuthContext)
      const { img } = photo;
      return (
            // <div>
            //       <img src={img} alt="" />
            // </div>
            <div className=''>
                  <div className="relative">
                        <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                              <h1 className='tracking-wider' > title</h1>
                              <p className="mx-auto">Description</p>
                              <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add feedback</button>
                              <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                          <div>
                                                <label className="label">
                                                      <span className="label-text text-xl font-semibold">Username :</span>
                                                      </label>
                                                <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered w-full" readOnly/>
                                                <label className="label">
                                                      <span className="label-text text-xl font-semibold">Feedback :</span>
                                                      </label>
                                                <input type="text" name='desc' placeholder='feedback' className="input input-bordered w-full"/>
                                                <label className="label">
                                                      <span className="label-text text-xl font-semibold">photo URL :</span>
                                                      </label>
                                                <input type="text" name='photo' placeholder='Photo URL' className="input input-bordered w-full"/>
                                          </div>
                                          <div className="modal-action">
                                                <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                                </form>
                                          </div>
                                    </div>
                              </dialog>
                        </a>
                        <a href="#" className="relative">
                              <div className="h-48 flex flex-wrap content-center">
                                    <img src={img} className="mx-auto h-full w-full" alt=""/>
                              </div>
                        </a>
                  </div>
            </div>
      );
};

export default Photo;