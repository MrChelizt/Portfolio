import { HiDownload } from "react-icons/hi";

import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import Card from "../../components/Card";
import data from "./data";

import "./about.css";

export default function About() {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            While working as a mobile developer I successfully developed an app
            made with React-native, as well as delivered PoC with Flutter which
            I learned in a week. With the PoC the startup raised the funding. I
            worked as R&D consultant and developed 40+ projects varying from
            plastic recycling facility to gluten-free bread recipe. The plastic
            recycling facility project raised the funding.
          </p>
          <p>
            My time owning my own business as a café owner taught me the
            importance of good coffee and being an employee.
          </p>
          <p>
            With these experiences, I am confident that I am:
            <li>- Quick learner</li>
            <li>- Don’t take shortcuts</li>
            <li>- Sincerely reliable sidekick</li>
            <li>- Have high standards for my work</li>
            <li>- Think outside of the box whenever necessary</li>
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}
