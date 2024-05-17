import React from 'react';

const CV = () => {
    return (
        <div id="cv">
            <section className="text-google-black text-center align-middle mt-12">
                <h1 className="text-5xl mb-2">My CV</h1>
                <p className="text-3xl mb-2">Software Developer</p>
                <h2 className="text-2xl mb-2 bolded">Programming Skills</h2>
                <ul className="text-xl mb-2">
                    <li>Python (very good)</li>
                    <li>Node.js (good)</li>
                    <li>JavaScript (good)</li>
                    <li>React (decent)</li>
                    <li>HTML/CSS (decent)</li>
                    <li>Java (okay)</li>
                </ul>
                <br></br>
                <h2 className="text-2xl mb-2 bolded">Databases</h2>
                <ul className="text-xl mb-2">
                    <li>SQLite</li>
                    <li>MongoDB</li>
                </ul>
                <br></br>
                <h2 className="text-2xl mb-1 bolded">Education</h2>
                <h3 className="text-xl mb-1"><span className='bolded'>2018 - now</span>&nbsp;&nbsp;redacted for privacy. | Secondary School</h3>
                <h3 className="text-xl mb-1"><span className='bolded'>2014 - 2018</span>&nbsp;&nbsp;redacted for privacy. | Primary School</h3>
            </section>
        </div>
    );
};

export default CV;