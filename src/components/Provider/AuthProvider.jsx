import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const creatUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const signInGithub = () =>{
        setLoading(true)
       return signInWithPopup(auth, githubProvider)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    const updateProfileNamePhoto = (user, name, photo) =>{
        setLoading(true)
        return updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('logged user', loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })

        return() =>{
            unsubscribe
        }
    }, [])

   const authInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut,
        signInGoogle,
        signInGithub,
        updateProfileNamePhoto
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;