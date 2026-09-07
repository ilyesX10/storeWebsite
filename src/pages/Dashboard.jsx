import Sidenavbar from "../component/Sidenavbar";
import { useState,useEffect } from "react";
function Dashboard() {

    return (
        <>
         <main className='container mx-auto mt-16 pt-0 pb-16 px-4 max-w-6xl flex flex-col gap-8 min-h-[80vh]'>
            <Sidenavbar>
                <a href="#" className="block text-gray-700 hover:bg-gray-100">List of users</a>
                <a href="#" className="block text-gray-700 hover:bg-gray-100">List of books</a>
                <a href="#" className="block text-gray-700 hover:bg-gray-100">Edit book</a>
                <a href="#" className="block text-gray-700 hover:bg-gray-100">Stats</a>
            </Sidenavbar>
         </main>
            
        </>
    )
}   

export default Dashboard