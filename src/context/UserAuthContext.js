import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged} from "firebase/auth";
import { auth } from "../configuration/FireBaseConfig";
import { useState,useEffect,useContext } from "react";

const UserAuthContext =createContext();
export function UserAuthContextProvider({childrens}){
    const [user, setUser]=useState("");
    function signUp(email,password){
        return  createUserWithEmailAndPassword(auth,email,password)
    }
    function signIn(email,password){
        return  signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }

    }, [])
    
    return <UserAuthContext.Provider value={{user,signUp}} >{childrens}</UserAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(UserAuthContext)
}