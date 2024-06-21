import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth } from '../../firebase/firebase.config';


export const GlobalContex = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null);
    const [loader, setLoader] = useState(true);
    const [drawings, setDrawing] = useState([]);


    // data fatching

    useEffect(() => {
        fetch("https://art-and-craft-server-three.vercel.app/drawing")
        .then((response) => response.json())
        .then((data) => setDrawing(data))
    },[])

    // user creation
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //profile update 
    const updateUserProfile = (name, photo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // user login
    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup (auth, googleProvider)
    }

    // github login
    const loginWithGithub = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    // state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const contextInfo = {
        createUser,
        setUser,
        user,
        loader,
        userLogin,
        loginWithGithub,
        loginWithGoogle,
        updateUserProfile,
        logout,
        drawings
    }

    return (
        <GlobalContex.Provider value = {contextInfo}>
            {children}
        </GlobalContex.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider;