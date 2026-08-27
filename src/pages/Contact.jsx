import ContactForm from '../component/ContactForm';
import Footer from '../component/Footer';
function Contact(){
    return(
        <>
        <main className='container mx-auto pt-28 pb-16 px-4 max-w-6xl flex flex-col gap-8 min-h-[80vh]'>
            <ContactForm />
        </main>
        <Footer />
        </>
    )
}

export default Contact