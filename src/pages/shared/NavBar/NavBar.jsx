import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NavBar = () => {
    const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Successfully Logged Out!',
                    'successful'
                )
                navigate('/')
            })
            .then()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addcar">Add Car</NavLink></li>
        <li><NavLink to={`/mycart/${user?.email}`}>My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li>
            <div className="container">
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                        <span className="slider round"> </span>
                    </label>
                </div>
            </div>
        </li>
    </>

    return (
        <div>
            <div className="">
                <nav className="navbar max-w-[1320px] mx-auto mb-20 lg:mb-0 p-2">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden bg-white me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content text-amber-600 font-medium mt-3 z-[1] p-2 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <div>
                            <Link to='/'><img src="https://i.ibb.co/b2czjwh/carlogo-1.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-2 text-amber-600 font-medium px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <>
                                    <div className="md:flex md:flex-row-reverse gap-1 justify-center items-center text-[9px] md:text-[12px]">
                                        <div>
                                            {
                                                user.photoURL ?
                                                    <img src={user?.photoURL} alt="user" className="rounded-full w-10 md:w-12" />
                                                    :
                                                    <img src="https://i.postimg.cc/tgVxRSf8/u.jpg" alt="user" className="rounded-full w-10 md:w-12 block" />
                                            }
                                        </div>
                                        <div className="text-white">
                                            {
                                                user.displayName ?
                                                    <h5 className="bg-black font-medium">{user?.displayName}</h5>
                                                    :
                                                    <p className="bg-black font-medium">No Name</p>
                                            }
                                            <button onClick={handleSignOut} className="btn btn-xs text-[10px] lg:text-[13px] bg-black rounded-md text-sky-500">Log Out</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="flex flex-col">
                                        <img src="https://i.postimg.cc/tgVxRSf8/u.jpg" alt="user" className="rounded-full w-10 md:w-12 block" />
                                        <button className="bg-black text-[10px] lg:text-[13px] rounded-md p-1 text-sky-500"><Link to="/login">Login</Link></button>
                                    </div>
                                </>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;