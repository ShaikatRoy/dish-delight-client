import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProviders = new GithubAuthProvider();

const AuthProviders = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    })

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.log("error", error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProviders)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log("error", error.message)
        })
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        logOut,
        handleGoogleSignIn,
        handleGithubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;