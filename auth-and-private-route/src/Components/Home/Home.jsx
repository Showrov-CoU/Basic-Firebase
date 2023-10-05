import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>This is home and user email is : {user?.email} </h1>
    </div>
  );
};

export default Home;
