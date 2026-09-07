import React from "react";

export default function Sidenavbar({ children}) {
    return (
        <aside className={`fixed top-16 left-0 z-100 h-screen w-72 bg-white shadow-xl transform  transition-transform duration-300 ease-in-out border-r border-gray-200`}>

            <div className="px-4 py-6">
                {children}
            </div>
        </aside>
    );
}   