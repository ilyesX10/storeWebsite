import Sidenavbar from "../component/Sidenavbar";
import { useState,useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard(){
    const {user,signOut} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate('/sign-in')
        }
    }, [user])
    return (
        <>
         <div className='mx-auto pt-0 pb-16 flex gap-4 min-h-[80vh] relative'>
            <Sidenavbar title="My Profile">
                <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">List of users</button>
                <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">List of books</button>
                <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">Edit book</button>
                <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">Stats</button>
                <div className="flex flex-col justify-end flex-1 "><button onClick={()=> {signOut();navigate('/sign-in')}} className="block hover:cursor-pointer text-gray-700 hover:bg-[var(--primary)]/90 text-white bg-[var(--primary)] py-2 px-4 ">Logout</button></div>
            </Sidenavbar>
            <div className="flex-1 bg-white h-full">

            </div>
         </div>
        </>
    )
}
export default AdminDashboard