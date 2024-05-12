import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="container mx-auto px-8 py-12 flex-grow">
                <section className="text-center">
                    <h2 className="text-5xl font-bold mb-8">404 - Page Not Found</h2>
                    <p className="text-xl mb-10">The page you're looking for does not exist.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default NotFoundPage;
