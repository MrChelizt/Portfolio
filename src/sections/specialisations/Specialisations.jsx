import data from "./data";
import Card from "../../components/Card";

import "./specialisations.css";

export default function Specialisations() {
    return (
        <section id="specialisations">
            <h2>My Specialisations</h2>
            <p>I give you my best in all</p>
            <div className="container specialisations__container" data-aos="fade-up">
                {data.map((item) => (
                    <Card key={item.id} className="specialisation light">
                        <div className="specialisation__icon">{item.icon}</div>
                        <div className="specialisation__details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
