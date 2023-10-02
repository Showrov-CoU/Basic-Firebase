import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);
    setRegisterError("");
    setSuccess("");
    if (pass.length < 6) {
      setRegisterError("Password should be at least 6 charecter");
      return;
    }
    if (!/[A-Z]/.test(pass)) {
      setRegisterError("Your Password should have at least one upper case");
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setSuccess("User created successfully");
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
        <h1 className="text-4xl font-bold text-[#d926a9] py-2">Please Register</h1>
        <form onSubmit={handleSubmit} className="space-y-3 w-[40%]">
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
          <input type="checkbox" name="" id="" />
          <input
            type="submit"
            value="Submit"
            className="btn btn-secondary w-full"
          />
        </form>
        {registerError && <p className="text-red-400 pb-2">{registerError}</p>}
        {success && <p className="text-green-600 pb-2">{success}</p>}
      </div>
    </div>
  );
};

export default Register;
