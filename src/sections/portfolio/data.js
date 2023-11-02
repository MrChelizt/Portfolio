import FrontendProject from "../../assets/projects/Frontend-Project.png";
import PortfolioProject from "../../assets/projects/Portfolio-Project.png";
import SpellShopProject from "../../assets/projects/Spell-Shop-Project.jpg";
import YummyProject from "../../assets/projects/Yummy-Project.png";
import PersonalWebsite from "../../assets/projects/Personal-Website.png";

const data = [
  {
    id: 1,
    category: "frontend",
    image: PersonalWebsite,
    title: "Personal Website",
    desc: "Personal website with customazible theme color options.",
    demo: "https://www.chelizt.com/",
    github: "https://github.com/MrChelizt/Portfolio",
  },
  {
    id: 2,
    category: "frontend",
    image: FrontendProject,
    title: "Frontend Project",
    desc: "Web application with navigation and filtering, supported by data from an api.",
    demo: "https://int-fs-8-front-end-project-chi.vercel.app/",
    github: "https://github.com/MrChelizt/FrontEnd_Project",
  },
  {
    id: 3,
    category: "fullstack",
    image: SpellShopProject,
    title: "Fullstack Project",
    desc: "Web application with navigation and filtering with custom backend and database.",
    demo: "https://frontend-j8gp.onrender.com",
    github: "https://github.com/MrChelizt/Fullstack",
  },
  {
    id: 4,
    category: "frontend",
    image: YummyProject,
    title: "Yummy Project",
    desc: "Web application with navigation and filtering",
    demo: "https://beautiful-faun-17d465.netlify.app/",
    github: "https://github.com/MrChelizt/Yummy_Project",
  },
  {
    id: 5,
    category: "frontend",
    image: PortfolioProject,
    title: "Portfolio Project",
    desc: "Single-page portfolio page clone.",
    demo: "https://elegant-concha-40fc9c.netlify.app/",
    github: "https://github.com/MrChelizt/React_Portfolio",
  },
];

export default data;
