import {createContext} from 'react'
import {useState,useEffect} from 'react'
import {supabase} from './lib/supabaseClient'

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // 1. Check current session on page load
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });
        // 2. Listen to real-time login & logout changes automatically!
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });
        return () => subscription.unsubscribe();
    }, []);
    // 3. Logout function
    async function signOut() {
        await supabase.auth.signOut();
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, signOut, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
export default AuthProvider