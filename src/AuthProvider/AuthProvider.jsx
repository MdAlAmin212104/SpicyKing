import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase_config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)


      const singUpWithEmailPassword = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }

      

      const logOut = () => {
            setLoading(true);
            return signOut(auth)
      }


      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setLoading(false);
                  setUser(currentUser)
            })

            return () => {
                  unsubscribe();
            }
      }, []);



      const userInfo = {
            user,
            singUpWithEmailPassword,
            logOut
      }
      return (
            <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;