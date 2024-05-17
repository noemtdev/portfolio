import Header from '../components/Header';
import Footer from '../components/Footer';

import { tech_icons, projects } from '../static/projects';

const ProjectsPage = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="container mx-auto px-8 py-12 flex-grow">
                <section className="text-center">
                    <h2 className="text-5xl font-bold mb-8">Projects</h2>
                    <p className="text-xl mb-10">Here are some of the projects I've worked on.</p>
                </section>
 
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg shadow-lg p-6 relative">
                            <img src={project.smallimg} alt={project.name} className="absolute top-0 right-0 h-16 w-16 p-1"  style={{"border-radius": "100%"}}/>
                            <h3 className="text-2xl font-bold">{project.name}</h3>
                            <p className="text-lg mb-4">{project.desc}</p>
                            <div className="flex flex-wrap gap-4">
                                {project.tech.map((tech, index) => (
                                    <img key={index} src={tech_icons[tech]} alt={tech} className="h-8 mt-3"/>
                                ))}
                            </div>
                            <a href={project.link} className="absolute bottom-0 right-0 bg-blue-500 text-white px-4 py-2 rounded">
                                View Project
                            </a>
                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;