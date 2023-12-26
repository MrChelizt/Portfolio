import {useState} from "react";

import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";

import "./portfolio.css";

export default function Portfolio() {
    const [projects, setProjects] = useState(data);

    const categories = data.map((item) => item.category);
    const uniqueCategories = ["all", ...new Set(categories)];

    const filterProjectsHandler = (category) => {
        if (category === "all") {
            setProjects(data);
            return;
        }

        const filterProjects = data.filter(
            (project) => project.category === category
        );
        setProjects(filterProjects);
    };

    return (
        <section id="portfolio">
            <h2>Recent Projects</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nobis
                nihil est quia dolorem ducimus deleniti minus maiores expedita?
                Perspiciatis, impedit dolor. Neque, mollitia laboriosam voluptates qui
                unde autem in?
            </p>
            <div className="container portfolio__container">
                <ProjectsCategories
                    categories={uniqueCategories}
                    onFilterProjects={filterProjectsHandler}
                />
                <Projects projects={projects}/>
            </div>
        </section>
    );
}
