import 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Register = () => {
    const {registerUser} = useContext(AuthContext)

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        form.reset()
        console.log(name, email, password, confirm);
        registerUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(e => console.log(e))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-slate-300">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-center">Register Here!</h1>
                <p className="py-6">Provide your Name, Email and Password you need Some info</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" name='confirm' placeholder="Confirm password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary" type='submit'>Register</button>
                    </div>
                    </form>
                    <p>Already have an Account ? <Link to='/login' className='text-green-500' >login here</Link></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;