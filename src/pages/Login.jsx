import 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleLogin =(e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset()
        loginUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true})
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-slate-300">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <p className="py-6">Log in by your registered Email and Password</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                    </form>
                    <p> Do not Have an Account ? <Link to='/register' className='text-green-500'>Register Here</Link></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;