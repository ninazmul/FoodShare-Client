import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        setLoading(false);
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOUT = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfileInfo = async (name, photo) => {
    const currentUser = auth.currentUser;
    try {
      await updateProfile(currentUser, {
        displayName: name,
        photoURL: photo,
      });

      setUser((prevUser) => ({
        ...prevUser,
        displayName: name,
        photoURL: photo,
      }));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      const userEmail = currentUser?.email || user.email;

      const loggedUser = { email: userEmail };

      if (currentUser) {
        const { displayName, photoURL, email } = currentUser;

        setUser({
          displayName,
          photoURL,
          email,
        });

        axios
          .post("https://food-share-server-pink.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post(
            "https://food-share-server-pink.vercel.app/signOut",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
        setUser(null);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signOUT,
    signIn,
    loading,
    signInWithGoogle,
    updateProfileInfo,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
