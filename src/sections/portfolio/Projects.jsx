import Project from "./Project";

export default function Projects({projects}) {
    return (
        <div>
            <div className="portfolio__projects" data-aos="fade-up">
                {projects.map((project) => (
                    <Project key={project.id} project={project}/>
                ))}
            </div>
        </div>
    );
}
