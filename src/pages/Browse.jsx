import Search from '../component/Search';
import BooksCard from '../component/BooksCard';
import Footer from '../component/Footer';
import { useState,useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

function Browse() {
    const [books, setBooks] = useState([]);
    async function fetchBooks() {
        const { data, error } = await supabase
            .from('books')
            .select('*');
        if (error) {
            console.error('Error fetching:', error);
        } else {
            console.log("hello")
            console.log('Books from Supabase:', data);
            setBooks(data);
        }
    }
    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <>
            <main className='container mx-auto pt-28 pb-16 px-4 max-w-6xl flex flex-col gap-8 min-h-[80vh]'>
                <Search />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                   {
                        books.map((book) => (
                            <BooksCard key={book.id} book={book} />
                        ))
                   }
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Browse;