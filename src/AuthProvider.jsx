import {createContext} from 'react'
import {useState} from 'react'
import {supabase} from './lib/supabaseClient'

export const AuthContext = createContext();

function AuthProvider({children}){
    const [isSignUp,setIsSignUp]=useState(false);
    const [isSignIn,setIsSignIn]=useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    return(
        <AuthContext.Provider value={{isSignUp,setIsSignUp,isSignIn,setIsSignIn,email,setEmail,password,setPassword,username,setUsername}}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider