import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOutUser} = useContext(AuthContext)
    const userSignOut = () =>{
        logOutUser()
    }
    return (
        <div>
            <div className="navbar bg-neutral-600">
            <div className="flex-1 ms-10 gap-5">
                <Link to='/'><img src="https://www.shutterstock.com/image-vector/building-care-logo-designs-vector-260nw-1288508848.jpg" alt="" className='w-10 h-10 rounded-3xl cursor-pointer' /></Link>
                <Link to='/' className="btn btn-ghost normal-case text-2xl">Civil Care</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link to='/course'>Courses</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/faq'>F A Q</Link></li>
                
                {user?
                    <>
                    <li>{user?.email}</li>
                    <Link><button className='btn bg-red-400' onClick={userSignOut}>Sign Out</button></Link>
                </>:<Link to='/login'><button className='btn bg-sky-400 text-white'>LogIn</button></Link>
                }
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;