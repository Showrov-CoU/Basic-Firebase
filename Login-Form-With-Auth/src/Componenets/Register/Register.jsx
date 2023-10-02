import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const checkBox = e.target.terms.checked;
    console.log(email, pass, checkBox);
    setRegisterError("");
    setSuccess("");
    if (pass.length < 6) {
      setRegisterError("Password should be at least 6 charecter");
      return;
    } else if (!/[A-Z]/.test(pass)) {
      setRegisterError("Your Password should have at least one upper case");
      return;
    } else if (!checkBox) {
      setRegisterError("Please accept our terms and condition");
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setSuccess("User created successfully");
        // verify email
        sendEmailVerification(result.user).then(() =>
          alert("please check your email and verify account")
        );
        //Update user name
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => console.log("profile Updated"))
          .catch((error) => console.log(error.message));
        console.log(result.user);
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.log(error.message);
      });
  };
  return (
    <div className="w-full h-[78vh] border-y-2">
      <div className="flex flex-col justify-center items-center gap-4 h-full">
        <h1 className="text-4xl font-bold text-[#d926a9] py-2">
          Please Register
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3 w-[40%]">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <div className="w-full relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              className="input input-bordered w-full"
              required
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-2 top-4"
            >
              {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
          <input type="checkbox" name="terms" id="terms" />
          <label className="ml-3" htmlFor="terms">
            Accept our <a href="">Terms and Condition</a>
          </label>
          <input
            type="submit"
            value="Submit"
            className="btn btn-secondary w-full"
          />
        </form>
        {registerError && <p className="text-red-400 pb-2">{registerError}</p>}
        {success && <p className="text-green-600 pb-2">{success}</p>}
        <p>
          Already have an account? Please
          <NavLink to="/login">
            <span className="text-[#d926a9]"> Login</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
