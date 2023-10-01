const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-[85vh] border-y-2">
      <div className="flex flex-col justify-center items-center gap-4 h-full">
        <h1 className="text-3xl font-bold">Please Register</h1>
        <form className="space-y-2">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="input input-bordered w-full"
          />
          <input
            onSubmit={handleSubmit}
            type="submit"
            value="Submit"
            className="btn btn-secondary w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
