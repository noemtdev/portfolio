import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

const HomePage = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section className="flex flex-col items-center justify-start pt-12 text-center">
            <h1 className="text-7xl font-bold mb-2 text-google-black">Hey, I'm Dennis</h1>
            <p className="text-xl mb-6 text-google-black">a software Developer from <span className="german-flag big-size bolded">Germany</span></p>
            </section>
            <About />
            <section className="flex flex-col items-center justify-start pt-12 text-center">
            <p className="text-xl mb-6 text-google-black">feel free to check out my <a href="/projects"><span className="bolded">projects!</span></a></p>
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;