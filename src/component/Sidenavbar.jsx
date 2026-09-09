import { useState } from "react"
import { CgCloseR } from "react-icons/cg";
import { LuSquareMenu } from "react-icons/lu";

function SideNavbar({children,title}){
    const [isMenuOpen,setIsMenuOpen] = useState(true)
    return (
        <>
            <aside className={`${isMenuOpen ? 'translate-x-0 opacity-100':'-translate-x-full opacity-0'} fixed top-0 py-6 left-0 z-100 h-screen w-72 bg-white shadow-xl transition-all duration-500 ease-in-out border-r border-gray-200`}>
                <div className="px-4 py-6">
                    <div className="flex items-center justify-between mb-12">
                        <h1 className="font-bold text-2xl text-[var(--foreground)]">{title}</h1>
                        <button onClick={()=>setIsMenuOpen(false)} className="hover:cursor-pointer hover:text-[var(--primary)]">
                            <CgCloseR className="w-10 h-10" />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-y-4">
                        {children}
                    </ul>
                </div>
            </aside>
            {isMenuOpen || (<button onClick={()=>setIsMenuOpen(true)} className="hover:cursor-pointer hover:text-[var(--primary)] fixed top-10 left-20 z-100">
                <LuSquareMenu className="w-10 h-10" />
            </button>)}
        </>
    )
}
export default SideNavbar
