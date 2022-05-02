import { ReactComponent as Logo } from "../assets/shared/logo.svg";
import { ReactComponent as Hamburger } from "../assets/shared/icon-hamburger.svg";
import { ReactComponent as CloseBtn } from "../assets/shared/icon-close.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
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

  const [collapse, setCollapse] = useState(false);

  const collapseMobileNav = () => {
    setCollapse((prevState) => !prevState);
  };
  return (
    <header>
      <nav>
        {/* DESKTOP VIEW */}
        <div className="navbar-items lg-screen">
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

        {/* TABLET VIEW */}
        <div className="navbar-items md-screen">
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
                  HOME<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/destination">
                  DESTINATION<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/crew">
                  CREW<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/technology">
                  TECHNOLOGY<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/missions">
                  MISSIONS<span></span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="navbar-items sm-screen">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="line"></div>
          <div className="hamburger" onClick={collapseMobileNav}>
            <Hamburger />
          </div>
        </div>

        {/* MOBILE COLLAPSABLE NAVBAR */}
        <div className={collapse ? "mobile-navbar active" : "mobile-navbar"}>
          <div className="close-btn">
            <div className="close-btn-icon" onClick={collapseMobileNav}>
              <CloseBtn />
            </div>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <NavLink to="/" onClick={collapseMobileNav}>
                  <b>00</b> HOME<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/destination" onClick={collapseMobileNav}>
                  <b>01</b> DESTINATION<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/crew" onClick={collapseMobileNav}>
                  <b>02</b> CREW<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/technology" onClick={collapseMobileNav}>
                  <b>03</b> TECHNOLOGY<span></span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/missions" onClick={collapseMobileNav}>
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
