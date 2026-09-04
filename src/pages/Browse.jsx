import Search from '../component/Search';
import BooksCard from '../component/BooksCard';
import Footer from '../component/Footer';
import { useState,useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

function Browse() {
    const [books, setBooks] = useState([]);
    const [loading,setLoading] = useState(false)
    async function fetchBooks() {
        setLoading(true)
        const { data, error } = await supabase
            .from('books')
            .select('*');
        if (error) {
            console.error('Error fetching:', error);
        } else {
            console.log('Books from Supabase:', data);
            setBooks(data);
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <>
            <main className='container mx-auto pt-28 pb-16 px-4 max-w-6xl flex flex-col gap-8 min-h-[80vh]'>
                <Search />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                    {loading ? (
                        <div className='size-12 col-span-full'>
                            <div className='size-full border-t-[3px] border-l-[3px] border-[var(--primary)] rounded-full animate-spin' />
                        </div>
                    ) : (
                        books.map((book) => (
                            <BooksCard key={book.id} book={book} />
                        ))
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Browse;