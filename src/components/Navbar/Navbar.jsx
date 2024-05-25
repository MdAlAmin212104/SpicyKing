import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
      const {user, logOut} = useContext(AuthContext)
      //console.log(user);

      const links = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/foods'>All Foods</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
      </>


      const handleLogOut =() => {
            logOut()
                  .then(() => {
                  })
                  .catch(err => console.log(err.message));
      }
      return (
            <div className="navbar bg-[#131313] text-white">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {links}
                              </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost text-xl">Spicy King</Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {links}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        {
                              user ? <>
                                    <span className='mr-4'></span>
                                          <div className="dropdown dropdown-end group">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar focus:outline-none">
                                                      <div className="w-10 rounded-full">
                                                            <img className='' alt="Tailwind CSS Navbar component" src={ user?.photoURL || "https://lh3.googleusercontent.com/a/ACg8ocKfSrgZFBvoQ6s12ZB8gHSg3E625KGpnaiYthDiKIfNqh1g62wg=s96-c"} />
                                                      </div>
                                                </div>
                                                <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-500 rounded-box w-52 invisible opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                                                      
                                                      <li>
                                                            <Link to='/added-food'>
                                                                  My added food
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link to='/add-food'>Add a food</Link>
                                                      </li>
                                                      <li>
                                                            <Link to='/order-food'>My ordered food</Link>
                                                      </li>
                                                <button onClick={handleLogOut} className='btn btn-primary'>Logout</button>
                                                </ul>
                                          </div>
                              </> :<button className='btn btn-primary text-xl'><Link to='/login'>Login</Link></button>
                                    
                        }
                  </div>
            </div>
      );
};

export default Navbar;