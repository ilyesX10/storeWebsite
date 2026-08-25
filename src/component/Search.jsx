import Button from './Button';
import { FaSearch } from 'react-icons/fa';

function Search() {
    return (
        <>
            <form action="" className='flex items-center justify-center gap-2 w-full px-6'>
                <div className="inline-flex items-center gap-3 pl-4 flex-1 border rounded-[var(--radius)] border-[var(--border)]">
                <FaSearch className="text-gray-400 w-4 h-4" />
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    className="px-3 w-full py-2 bg-transparent text-sm sm:text-base focus:outline-none placeholder-gray-400" 
                    placeholder="Search by title, author, or ISBN..."
                />
            </div>
                <Button className="bg-[var(--secondary)] text-white h-full rounded-[var(--radius)] py-2 px-4" type="submit">Search</Button>
            </form>
        </>
    )
}

export default Search