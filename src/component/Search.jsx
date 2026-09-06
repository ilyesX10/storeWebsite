import Button from './Button';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function Search({filterBooks}) {
    const [input,setInput] = useState("")
    function handelChange(e){
        setInput(e.target.value)
    }
    function handelClick(e){
            e.preventDefault()
            filterBooks(input)
    }
    return (
        <>
            <form onSubmit={handelClick} className='flex items-center justify-center gap-2 w-full px-6'>
                <div className="inline-flex items-center gap-3 pl-4 flex-1 border rounded-[var(--radius)] overflow-hidden border-[var(--border)] outline-transparent outline-2 focus-within:outline-[var(--foreground)]/50 transition-all">
                    <FaSearch className="text-gray-400 w-4 h-4" />
                    <input
                        type="search"
                        name="search"
                        value={input}
                        id="search"
                        className="px-3 w-full py-2 bg-transparent text-sm sm:text-base focus:outline-none placeholder-gray-400"
                        placeholder="Search by title, author, or ISBN..."
                        onChange={handelChange}
                    />
                </div>
                <Button type="submit" className="bg-[var(--secondary)] px-6 py-2 text-[var(--background)] rounded-[var(--radius)] text-sm sm:text-base">Search</Button>
            </form>
        </>
    )
}

export default Search