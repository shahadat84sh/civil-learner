import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const registerUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOutUser =() =>{
        setLoading(true)
        return signOut(auth) 
    }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        console.log('Auth user info', currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return () =>{
        unsubscribe()
    }
   },[])

    const authInfo = {user, registerUser, loginUser, logOutUser, loading}
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;