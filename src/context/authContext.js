import {createContext,useContext} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from  'firebase/auth'
import { auth } from '../firebase/credenciales'

export const authContext = createContext()


export const useAuth = () =>{
    const context= useContext(authContext)
    return context
}

export function AuthProvider({children}){

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    return( // el context provider permite acceder a todos los componentes hijos : user
        <authContext.Provider value={{signup,login}}> 
            {children}
        </authContext.Provider>
    )
}