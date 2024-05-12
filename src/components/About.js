import React from 'react';
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <><section className="text-google-black text-center align-middle mt-12">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>

            <p className="text-xl">Hey, my name is Dennis Borisov and I'm a 17 year old software developer from
                <span className="german-flag"> Germany!</span>
            </p>

            <p className="text-xl">
                I'm currently in 11th grade at the
                <a href="https://goethegymnasium.com"><span className="bolded"> Goethe-Gymnasium Auerbach </span></a>
                and I'm looking forward to studying computer science at university.
            </p>

            <p className="text-xl">
                In my free time I enjoy coding. Most of the code I write can be considered Backend or Discord Bots, with my latest creation being
                <a href="https://discord.gg/pixly"><span className='bolded text-google-blue'> pixly</span></a>!
            </p>
        </section>

        <section className="text-center flex justify-center">
            <a href="https://github.com/noemtdev">
                <button className="bg-google-dark-grey text-white font-bold py-2 px-4 rounded-full mt-4 flex items-center">
                    <FaGithub className="mr-1" />
                    <span>My GitHub</span>
                </button>
            </a>
        </section>
        <section className="text-center flex justify-center mt-6">
            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=noemtdev&count_private=true&hide=procfile,css,shell,html,batchfile&theme=dark&border_color=000000&cache_seconds=1800&layout=compact&langs_count=10&custom_title=Most%20Used%20Coding%20Languages" alt="noemtdev" />
        </section>
    </>

    );
};

export default About;
