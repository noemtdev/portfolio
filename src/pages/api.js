import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';

const ApiDocs = () => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        fetch('/output-docs.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setApiData(data);
            });

        return () => {}
    }, []);

    function copyToClipboard(text) {
        const baseUrl = window.location.origin;
        const urlToCopy = `${baseUrl}${text}`;
    
        navigator.clipboard.writeText(urlToCopy)
            .then(() => {
                console.log('Copied to clipboard');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="container mx-auto px-8 py-12 flex-grow">
                <section className="text-center">
                    <h2 className="text-5xl font-bold mb-14">API Documentation</h2>
                    <section className="grid grid-cols-1 md:grid-cols-2 lg gap-12">
                        {apiData && Object.keys(apiData).map((method) => (
                            <div key={method}>
                                {Object.keys(apiData[method]).map((endpoint) => (
                                    <><div key={endpoint} className="mb-8">
                                        <h1 className='bolded text-3xl mb-2 mt-4'>{method} {endpoint}</h1>
                                        <button 
                                            className="bg-blue-500 text-white mb-2 rounded-sm hover:bg-blue-600" 
                                            style={{ padding: "5px", "paddingLeft": "10px", "paddingRight": "10px" }} 
                                            onClick={() => copyToClipboard(endpoint)}>
                                            Copy
                                        </button>
                                        <h2 className='bolded text-2xl'>Parameters:</h2>
                                        {apiData[method][endpoint].parameters && apiData[method][endpoint].parameters.length > 0 ?
                                            apiData[method][endpoint].parameters.map((parameter) => (
                                                <div key={parameter.name}>
                                                    <p className='bolded'>{parameter.name}</p>
                                                    <p className="mb-4">{parameter.description}</p>
                                                </div>
                                            ))
                                            :
                                            <p className="mb-4">No parameters needed</p>}
                                        <h4 className="bolded">Description:</h4>
                                        <p>{apiData[method][endpoint].description}</p>
                                    </div>
                                    <><hr style={{ width: '50%', margin: 'auto' }} /></></>

                                ))}
                            </div>
                        ))}
                    </section>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ApiDocs;