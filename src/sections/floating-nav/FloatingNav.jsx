import Scrollspy from "react-scrollspy";

import data from "./data";
import Nav from "./Nav";

import "./floating-nav.css";

export default function FloatingNav() {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-300}
        className="scrollspy"
        items={["header", "about", "specialisations", "portfolio", "contact"]}
        currentClassName="active"
      >
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
}
