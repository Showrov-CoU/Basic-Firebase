import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef(null);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);

    setRegisterError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        if (result.user.emailVerified) {
          setSuccess("User Logged in successfully");
        } else{
          alert("Please verify your email")
        }

        console.log(result.user);
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.log(error.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      setRegisterError("Please enter your email");
      return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setRegisterError("Please write your valid email");
      return;
    }
    console.log("Yes ok");
    console.log(emailRef.current.value);
    sendPasswordResetEmail(auth, email)
      .then(() => alert("Please check your email"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-[#d926a9]">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form className="card-body" onSubmit={handleLogIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    ref={emailRef}
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a
                      onClick={handleResetPassword}
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary">Login</button>
                </div>
              </form>
              {registerError && (
                <p className="text-red-400 pb-2">{registerError}</p>
              )}
              {success && <p className="text-green-600 pb-2">{success}</p>}
              <p>
                New to this site? Please
                <NavLink to="/register">
                  <span className="text-[#d926a9]"> Register</span>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
