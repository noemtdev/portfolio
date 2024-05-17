import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

const Imprint = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
                <div id="imprint" className="flex-grow">
                    <section className="text-google-black text-center align-middle mt-12">
                        <h1 className="text-6xl mb-3">Imprint</h1>
                        <p className="text-xl mb-10">
                            Street: <span className="bolded">redacted for privacy.</span><br />
                            City: <span className="bolded">redacted for privacy.</span><br />
                            Postal Code: <span className="bolded">redacted for privacy.</span><br />
                            Country: <span className="bolded">redacted for privacy.</span><br />
                            Telephone: <span className="bolded">redacted for privacy.</span><br />
                            Email: <a href="mailto:dennis@noemt.dev"><span className="bolded">dennis@noemt.dev</span><br /></a>
                        </p>
                    </section>
                </div>
            <Footer />
        </div>
    );
};

export default Imprint;