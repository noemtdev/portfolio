import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useEffect } from 'react';
import { tech_icons, products } from '../static/products';

const Products = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.sellix.io/static/js/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto px-8 py-12 flex-grow">
                <section className="text-center">
                    <h2 className="text-5xl font-bold mb-8">Products</h2>
                </section>
 
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg shadow-lg p-6 relative">
                            <img src={product.smallimg} alt={product.name} className="absolute top-0 right-0 h-16 w-16 p-1"  style={{"border-radius": "100%"}}/>
                            <h3 className="text-2xl font-bold">{product.name}</h3>
                            <p className="text-lg mb-4">{product.desc}</p>
                            <p className="text-lg mb-4 mt-2">{product.extra}</p>
                            <div className="flex flex-wrap gap-4">
                                {product.tech.map((tech, index) => (
                                    <img key={index} src={tech_icons[tech]} alt={tech} className="h-8 mt-3"/>
                                ))}
                            </div>
                            <button className="absolute bottom-0 right-0 bg-blue-500 text-white px-4 py-2 rounded" 
                                data-sellix-product={product.sellix} id="sellixButton"   
                                data-sellix-css="https://noemt.dev/sellix.css"
                            >
                                Purchase ({product.price})
                            </button>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Products;