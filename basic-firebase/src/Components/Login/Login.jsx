import { useState } from "react";
import app from "../../firebase/firebase.init";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [users, setUsers] = useState(null);

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUsers(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result.user);
        setUsers(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUsers(null);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      {users ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleGitHubSignIn}>Github Login</button>
        </div>
      )}
      {users && (
        <div>
          <h1>Name:{users.displayName}</h1>
          <h2>Email:{users.email} </h2>
          <img src={users.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
