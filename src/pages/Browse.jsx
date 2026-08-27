import Search from '../component/Search';
import BooksCard from '../component/BooksCard';
import Footer from '../component/Footer';
import cover from '../assets/Book_Cover.jpg';
import cover2 from '../assets/mt.jpg';

function Browse() {
    return (
        <>
            <main className='container mx-auto pt-28 pb-16 px-4 max-w-6xl flex flex-col gap-8 min-h-[80vh]'>
                <Search />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <BooksCard url={cover} />
                    <BooksCard url={cover2} />
                    <BooksCard url={cover} />
                    <BooksCard url={cover2} />
                     <BooksCard url={cover} />
                    <BooksCard url={cover2} />
                     <BooksCard url={cover} />
                    <BooksCard url={cover2} />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Browse;