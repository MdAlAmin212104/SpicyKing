import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
      const { singUpWithEmailPassword, updateUserProfile } = useContext(AuthContext)
      const handleRegister = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const photo = form.photo.value;
            console.log(name, email, password, photo);
            singUpWithEmailPassword(email, password)
                  .then(res => {
                        updateUserProfile(name, photo)
                              .then(res => {
                                    console.log('user profile update', res.data);
                              })
                              .catch(err => console.error(err));
                  })
                  .catch(err => console.error(err));
      }




      return (
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto mt-8">
                  <h1 className="text-2xl font-bold text-center">Register</h1>
                  <form onSubmit={handleRegister} className="space-y-6">
                        <div className="space-y-1 text-sm">
                              <label htmlFor="name" className="block text-gray-600">Name :</label>
                              <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-violet-600" required />
                        </div>
                        <div className="space-y-1 text-sm">
                              <label htmlFor="email" className="block text-gray-600">email :</label>
                              <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-violet-600" required/>
                        </div>
                        <div className="space-y-1 text-sm">
                              <label htmlFor="PhotoURL" className="block text-gray-600">photoURL :</label>
                              <input type="text" name="photo" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-violet-600" required/>
                        </div>
                        <div className="space-y-1 text-sm">
                              <label htmlFor="password" className="block text-gray-600">Password</label>
                              <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-violet-600" required/>
                              
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Register</button>
                  </form>
                  
                  
                  <p className="text-xl text-center sm:px-6 text-gray-600">have an account?
                        <Link to='/login' rel="noopener noreferrer" className="underline text-gray-800">Log in</Link>
                  </p>
            </div>
      );
};

export default Register;