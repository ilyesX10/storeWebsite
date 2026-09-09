import Sidenavbar from "../component/Sidenavbar";
import { useState,useEffect } from "react";

function UserDashboard() {
    return (
        <>
         <div className='mx-auto pt-0 pb-16 flex gap-4 min-h-[80vh] relative'>
            <Sidenavbar title="My Profile">
                <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">My Favorite Books</button>
                <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">Profile Infomation</button>
                <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">My Bucket List</button>
            </Sidenavbar>
            <div className="flex-1 bg-white">

            </div>
         </div>
            
        </>
    )
}   

export default UserDashboard