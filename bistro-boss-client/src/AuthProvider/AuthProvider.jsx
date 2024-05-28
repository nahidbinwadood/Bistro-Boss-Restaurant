import { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/Firebase.config";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  //Observer:
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        const userInfo = { email: user.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            // console.log(res.data.token);
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, [axiosPublic]);

  //SignUp :
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login:
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //LogOut:
  const logOut = () => {
    setUser(null);
    setLoading(true);
    return signOut(auth).then(() => {});
  };

  //Update Profile:
  const updateUserProfile = (name, email, image) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      email: email,
      photoURL: image,
    }).then(() => {
      setUser({ ...user, displayName: name, email: email, photoURL: image });
    });
    return;
  };

  //Providers:
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  //Google:
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Github:
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //Facebook:
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const allValues = {
    user,
    loading,
    signUp,
    logIn,
    logOut,
    updateUserProfile,
    googleLogIn,
    githubLogin,
    facebookLogin,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
