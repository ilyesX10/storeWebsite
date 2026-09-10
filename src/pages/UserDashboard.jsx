import Sidenavbar from "../component/Sidenavbar";
import { useState,useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
    const {user,signOut} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate('/sign-in')
        }
    }, [user])
    return (
        <>
         <div className='flex min-h-[100vh] relative'>
            <Sidenavbar title="My Profile">
                <button className="block block text-[var(--foreground)] hover:bg-[var(--foreground)]/10 hover:cursor-pointer transition-all py-2 px-4 border-l-4 border-[var(--accent)]">My Favorite Books</button>
                <button className="block block text-[var(--foreground)] hover:bg-[var(--foreground)]/10 hover:cursor-pointer transition-all py-2 px-4 border-l-4 border-[var(--accent)]">Profile Infomation</button>
                <button className="block block text-[var(--foreground)] hover:bg-[var(--foreground)]/10 hover:cursor-pointer transition-all py-2 px-4 border-l-4 border-[var(--accent)]">My Bucket List</button>
                <div className="flex flex-col justify-end flex-1 "><button onClick={()=> {signOut();navigate('/sign-in')}} className="block hover:cursor-pointer text-[var(--foreground)] hover:bg-[var(--primary)]/90 text-white bg-[var(--primary)] py-2 px-4 ">Logout</button></div>
            </Sidenavbar>
            <div className="w-72"/>
            <div className="flex-1 h-full ">
            </div>
         </div>
            
        </>
    )
}   

export default UserDashboard