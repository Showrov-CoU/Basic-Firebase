import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const pass = form.get("password");
    signIn(email, pass)
      .then((res) => {
        console.log(res.user);
        //navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-2/4 mx-auto mt-10">
        <h1 className="w-fit mx-auto text-3xl font-bold">Plaese login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-3">
          Dont have an account?
          <Link className="text-blue-600 font-bold" to="/register">
            Go to Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
