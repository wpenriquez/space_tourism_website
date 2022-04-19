import { ReactComponent as Logo } from "../assets/shared/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  const changeBackground = () => {
    if (!(location === "")) {
      document.querySelector("body").className = "";
      document.querySelector("body").classList.add(location);
    } else {
      document.querySelector("body").className = "";
    }
  };

  changeBackground();
  return (
    <header>
      <nav>
        <div className="navbar-items">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="line"></div>
          <div className="nav-links">
            <div className="nav-blur"></div>
            <ul>
              <li>
                <NavLink to="/">
                  <b>00</b> HOME<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/destination">
                  <b>01</b> DESTINATION<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/crew">
                  <b>02</b> CREW<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/technology">
                  <b>03</b> TECHNOLOGY<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/missions">
                  <b>04</b> MISSIONS<span></span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
