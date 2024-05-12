import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="container mx-auto px-8 py-12 flex-grow">
                        <section className="text-center">
                            <h2 className="text-5xl font-bold mb-8">Contact</h2>
                            <p className="text-xl mb-10">You can reach me via <a href="mailto:dennis@noemt.dev" className="text-google-blue">mail</a>.</p>
                        </section>
                    </main>

                    

                    <Footer />
                </div>
    );
};

export default ContactPage;