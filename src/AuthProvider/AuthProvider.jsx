import {
      FacebookAuthProvider,
      GithubAuthProvider,
      GoogleAuthProvider,
      createUserWithEmailAndPassword,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      signInWithPopup,
      signOut,
      updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase_config';
import axios from 'axios';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)


      const googleProvider = new GoogleAuthProvider();
      const facebookProvider = new FacebookAuthProvider();
      const githubProvider = new GithubAuthProvider();

      const singUpWithEmailPassword = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }


      const singInWithEmailPassword = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
      }

      const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
      }
      const facebookLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, facebookProvider)
      }
      const githubLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, githubProvider)
      }
      

      const logOut = async () => {
            setLoading(true);
            return signOut(auth)
      }


      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  const userEmail = currentUser?.email || user?.email;
                  const loggedUser = { email: userEmail }
                  setLoading(false);
                  setUser(currentUser)
                  if (currentUser) {
                  axios.post(`${import.meta.env.VITE_URL}/jwt`, loggedUser, {withCredentials: true})
                        .then(res => {
                              //console.log('token added here', res.data);
                        })
                  }
                  else {
                        axios.post(`${import.meta.env.VITE_URL}/logout`, loggedUser, {withCredentials: true})
                        .then(res => {
                              //console.log(res.data);
                        })
                  }
            })

            return () => {
                  unsubscribe();
            }
      }, []);
      if (loading) {
            return <span className="loading loading-spinner loading-md"></span>
      }


      const userInfo = {
            user,
            singUpWithEmailPassword,
            singInWithEmailPassword,
            updateUserProfile,
            googleLogin,
            facebookLogin,
            githubLogin,
            logOut
      }
      return (
            <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;