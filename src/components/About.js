import React from 'react';
import { FaGithub } from 'react-icons/fa';

const About = () => {
    function getAge() {
        const today = new Date();
        const birthDate = new Date(2007, 3, 12);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;

    }
    return (
        <div id="about">
            <section className="text-google-black text-center align-middle mt-12">
                <h2 className="text-5xl mb-8">About Me</h2>

                <p className="text-xl">Hey, my name is Dennis and I'm a {getAge()} year old software developer from
                    <span className="german-flag"> Germany!</span>
                </p>

                <p className="text-xl">
                    I'm currently in 11th grade at the
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><span className="bolded"> redacted for privacy. </span></a>
                    and I'm looking forward to studying computer science at university.
                </p>

                <p className="text-xl">
                    In my free time I enjoy coding. Most of the code I write can be considered Backend or Discord Bots, with my latest creation being
                    <a href="https://discord.gg/pixly"><span className='bolded text-google-blue'> pixly</span></a>!
                </p>

                <div className="flex justify-center mt-5">
                    <a href="https://github.com/noemtdev" className="github-icon">
                        <FaGithub size={50} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;