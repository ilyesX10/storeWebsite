import Sidenavbar from "../component/Sidenavbar";
import { CgCloseR } from "react-icons/cg";
import { useState,useEffect } from "react";

function UserDashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
         <main className='container mx-auto mt-16 pt-0 pb-16 px-4 max-w-6xl flex flex-col gap-8 min-h-[80vh]'>
            <Sidenavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
                <div className="flex items-center justify-between mb-6">
                    <h1 className="font-bold text-2xl text-[var(--foreground)]">My Profile</h1>
                    <button onClick={()=>setIsMenuOpen(false)} className="hover:cursor-pointer hover:text-[var(--primary)]">
                        <CgCloseR className="w-10 h-10" />
                    </button>
                </div>
                <ul className="flex flex-col gap-y-4">
                    <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">List of users</button>
                    <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">List of books</button>
                    <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">Edit book</button>
                    <button className="block text-gray-700 hover:bg-gray-100 py-2 px-4 border-l-4 border-[var(--accent)]">Stats</button>
                </ul>
            </Sidenavbar>
         </main>
            
        </>
    )
}   

export default UserDashboard