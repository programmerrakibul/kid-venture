import { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const SignOutUser = () => {
    return signOut(auth);
  };

  const updateUserProfile = (info) => {
    return updateProfile(auth.currentUser, info);
  };

  const sendResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    setLoading(true);
    const onSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => onSubscribe();
  }, []);

  const authData = {
    currentUser,
    createUser,
    updateUserProfile,
    signInWithPassword,
    SignOutUser,
    signInWithGoogle,
    sendResetEmail,
    setCurrentUser,
    loading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
