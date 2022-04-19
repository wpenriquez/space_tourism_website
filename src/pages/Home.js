import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section-home">
      <div className="section-items lg-screen">
        <div className="space-intro">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <span className="space">SPACE</span>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore-button">
          <Link to="/destination">
            <div className="explore">
              EXPLORE
              <div className="explore-hover"></div>
            </div>
          </Link>
        </div>
      </div>
      <div className="section-items sm-screen">
        <div className="space-intro">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <span className="space">SPACE</span>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore-button">
          <Link to="/destination">
            <div className="explore">
              EXPLORE
              <div className="explore-hover"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
