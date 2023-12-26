import {useThemeContext} from "./context/theme-context";
import {useRef, useState, useEffect} from "react";

import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Specialisations from "./sections/specialisations/Specialisations";
import Portfolio from "./sections/portfolio/Portfolio";
import TechStacks from "./sections/tech-stacks/TechStacks";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Theme from "./theme/Theme";

export default function App() {
    const {themeState} = useThemeContext();

    const mainRef = useRef();
    const [showFloatingNav, setShowFloatingNav] = useState(true);
    const [siteYPosition, setSiteYPosition] = useState(0);

    const showFloatingNavHandler = () => {
        setShowFloatingNav(true);
    };

    const hideFloatingNavHandler = () => {
        setShowFloatingNav(false);
    };

    const floatingNavToggleHandler = () => {
        if (
            siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
            siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
        ) {
            showFloatingNavHandler();
        } else {
            hideFloatingNavHandler();
        }
        setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
    };

    useEffect(() => {
        const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
        return () => clearInterval(checkYPosition);
    }, [siteYPosition]);

    return (
        <main
            className={`${themeState.primary} ${themeState.background}`}
            ref={mainRef}
        >
            <Navbar/>
            <Header/>
            <About/>
            <Specialisations/>
            <Portfolio/>
            <TechStacks/>
            <Contact/>
            <Footer/>
            <Theme/>
            {showFloatingNav && <FloatingNav/>}
        </main>
    );
}
