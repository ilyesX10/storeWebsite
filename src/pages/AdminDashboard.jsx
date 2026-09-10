import Sidenavbar from "../component/Sidenavbar";
import { useState,useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { IoMdMoon,IoMdSunny } from "react-icons/io";

function AdminDashboard(){
    const {user,signOut} = useContext(AuthContext)
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate('/sign-in')
        }
    }, [user])
    return (
        <>
         <div className='mx-auto pt-0 pb-16 flex gap-4 min-h-[100vh] transition-all relative'>
            <Sidenavbar title="My Profile">
                <button className="block text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-all hover:cursor-pointer py-2 px-4 border-l-4 border-[var(--accent)]">List of users</button>
                <button className="block text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-all hover:cursor-pointer py-2 px-4 border-l-4 border-[var(--accent)]">List of books</button>
                <button className="block text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-all hover:cursor-pointer py-2 px-4 border-l-4 border-[var(--accent)]">Edit book</button>
                <button className="block text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-all hover:cursor-pointer py-2 px-4 border-l-4 border-[var(--accent)]">Stats</button>
                <div className="flex flex-col gap-y-6 justify-end flex-1 ">
                    <button onClick={toggleTheme} className="p-1 mx-auto rounded-full bg-[var(--foreground)] text-[var(--background)] w-6 h-6 flex items-center justify-center">
                        {theme === "light" ? <IoMdSunny /> : <IoMdMoon />}
                    </button>
                    <button onClick={()=> {signOut();navigate('/sign-in')}} className="block hover:cursor-pointer rounded-[var(--radius)] text-gray-700 hover:bg-[var(--primary)]/90 text-white bg-[var(--primary)] py-2 px-4 ">Logout</button>
                </div>
            </Sidenavbar>
            <div className="flex-1 h-full">

            </div>
         </div>
        </>
    )
}
export default AdminDashboard