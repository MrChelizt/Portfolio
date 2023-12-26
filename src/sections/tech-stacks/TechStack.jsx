export default function TechStack({techStack}) {
    return (
        <div className="light">
            <div className="tech-stack__logo">
                <img src={techStack.logo} alt={techStack.name}/>
            </div>
        </div>
    );
}
