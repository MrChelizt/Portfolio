import {useEffect} from "react";
import AOS from "aos";

import HeaderImage from "../../assets/header.jpg";
import data from "./data";

import "./header.css";
import "aos/dist/aos.css";

export default function Header() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile" data-aos="fade-in">
                    <img src={HeaderImage} alt="Header Portrait"/>
                </div>
                <h3 data-aos="fade-up">Oytun Ikiz</h3>
                <p data-aos="fade-up">
                    Hi, I am Oytun and I am a highly versatile and experienced Software
                    Developer with a diverse background in Mobile development, R&D
                    consulting and café ownership. And yes, I’ve tried many things over
                    the years.
                </p>
                <div className="header__cta" data-aos="fade-up">
                    <a href="#contact"
                       className="btn primary"
                    >
                        Lets talk
                    </a>
                    <a href="#portfolio" className="btn light">
                        My Work
                    </a>
                </div>
                <div className="header__socials">
                    {data.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
