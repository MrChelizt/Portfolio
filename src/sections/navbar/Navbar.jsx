import { IoIosColorPalette } from "react-icons/io";

import Logo from "../../assets/Logo.png";
import data from "./data";
import { useModalContext } from "../../context/modal-context";

import "./navbar.css";

export default function Navbar() {
  const { showModalHandler } = useModalContext();

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>

        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
}
