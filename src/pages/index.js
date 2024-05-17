import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import CV from '../components/cv';

const HomePage = () => {

    function CloseCard() {
        const element = document.getElementById('card-bottom-left');
        if (element) {
            element.classList.add('fade-out');
            setTimeout(() => {
                element.style.display = 'none';
            }, 1000);
        } else {
            console.error("Element with id 'card-bottom-left' not found");
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section className="flex flex-col items-center justify-start pt-12 text-center">
            <h1 className="text-7xl font-bold mb-2 text-google-black">Hey, I'm Dennis</h1>
            <p className="text-xl mb-6 text-google-black">a software Developer from <span className="german-flag big-size bolded">Germany</span></p>
            </section>
            <About />
            <CV />
            <section className="flex flex-col items-center justify-start pt-12 text-center">
            <p className="text-xl mb-6 text-google-black">feel free to check out my <a href="/projects"><span className="bolded">projects!</span></a></p>
            </section>
            <Footer />
                <section className="fixed bottom-10 right-5 bg-white p-4 rainbowthing" id="card-bottom-left">
                    <div className="border border-gray-200 rounded-lg shadow-lg p-6 relative">
                        <h3 className="text-2xl font-bold">Important</h3>
                        <p className="text-lg mb-4">This website is still in the works.<br></br>It is far from being finished.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={CloseCard}>
                            Okay!
                        </button>
                    </div>

                </section>
            </div>
        
    );
};

export default HomePage;