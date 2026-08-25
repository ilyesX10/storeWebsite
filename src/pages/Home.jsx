import Footer from '../component/Footer';
import Details from '../component/Details';
import Header from '../component/Header';
import Stats from '../component/Stats';

function Home() {
    return (
        <>
            <main>
                <Header />
                <Stats />
                <Details />
            </main>
            <Footer />
        </>
    )
}

export default Home