import "./navbar.css";
import logo from "../../assets/logo1.jpg";
import data from "./data";
import { IoMdColorPalette } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="nav__menu">
          {data.map((navItem) => (
            <li key={navItem.id}>
              <a href={navItem.link}>{navItem.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon">
          <IoMdColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
