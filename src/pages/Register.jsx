import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Register/GoogleLogin";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Register = () => {
    const [passMatch, setPassMatch] = useState(true);
    const {user, createUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setPassMatch(false);
        } else {
            setPassMatch(true);
        }

        if(password === confirmPassword){
            createUser(email, password);
        }
    };

    useEffect(() => {
        if(user){
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
                        </div>
                        {!passMatch && (
                            <div className="my-2">
                                <p className="text-red-500">Passwords do not match!</p>
                            </div>
                        )}
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500 text-white">Register</button>
                        </div>
                        <div className="mt-6">
                            <GoogleLogin />
                        </div>
                        <div className="mt-6">
                            <p>Already have an account?{" "}
                                <Link to={"/login"} className="text-red-500">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;