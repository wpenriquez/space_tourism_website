import React, { useEffect, useState } from "react";
import "../../css/crewcarousel.css";

const CrewCarousel = (props) => {
  const [activeState, changeState] = useState(1);
  const [mousedOver, setMousedOver] = useState(false);

  // FUNCTION TO CHANGE ACTIVE STATE OF
  const toggleActive = (val) => {
    changeState(val);
  };

  // USE EFFECT FOR PAUSING THE CAROUSEL WHEN THE CURSOR IS HOVERING OVER THE CREW IMAGE OR INFO
  useEffect(() => {
    if (!mousedOver) {
      const slide = setInterval(() => {
        changeState((prevState) => {
          if (prevState < props.crewVal.length) {
            return (prevState += 1);
          } else {
            return (prevState = 1);
          }
        });
      }, 8000);
      return () => clearInterval(slide);
    } else {
      changeState((prevState) => prevState);
    }
  }, [mousedOver, props.crewVal]);

  return (
    <div className="crew-carousel">
      {/* DESKTOP VIEW */}
      <div className="crew-carousel-inner lg-screen">
        <div className="crew-carousel-desc">
          <div className="crew-carousel-info">
            {props.crewVal.map((val) => (
              <div
                tabIndex={activeState === val.id ? "1" : ""}
                onMouseOver={() => setMousedOver(true)}
                onMouseOut={() => setMousedOver(false)}
                key={val.id}
                className={
                  activeState === val.id
                    ? "crew-carousel-info-inner active"
                    : "crew-carousel-info-inner"
                }
              >
                <h2>{val.occupation}</h2>
                <h1>{val.name}</h1>
                {val.desc}
              </div>
            ))}
          </div>
          <div className="crew-carousel-indicators">
            <ul>
              {props.crewVal.map((val) => (
                <li key={val.id}>
                  <button
                    key={val.id}
                    onClick={() => {
                      toggleActive(val.id);
                      setMousedOver(true);
                      setTimeout(() => setMousedOver(false), 300);
                    }}
                    className={
                      activeState === val.id
                        ? "crew-carousel-button active"
                        : "crew-carousel-button"
                    }
                  >
                    <span
                      key={val.id}
                      className="crew-carousel-transition"
                    ></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="crew-carousel-images">
          {props.crewVal.map((val) => (
            <img
              key={val.id}
              onMouseOver={() => setMousedOver(true)}
              onMouseOut={() => setMousedOver(false)}
              className={
                activeState === val.id
                  ? "crew-carousel-img active"
                  : "crew-carousel-img"
              }
              src={val.img}
              alt={val.name}
            />
          ))}
        </div>
      </div>

      {/* TABLET VIEW */}
      <div className="crew-carousel-inner md-screen">
        <div className="crew-carousel-info">
          {props.crewVal.map((val) => (
            <div
              tabIndex={activeState === val.id ? "1" : ""}
              onMouseOver={() => setMousedOver(true)}
              onMouseOut={() => setMousedOver(false)}
              key={val.id}
              className={
                activeState === val.id
                  ? "crew-carousel-info-inner active"
                  : "crew-carousel-info-inner"
              }
            >
              <h2>{val.occupation}</h2>
              <h1>{val.name}</h1>
              {val.descMobile}
            </div>
          ))}
        </div>

        <div className="crew-carousel-indicators">
          <ul>
            {props.crewVal.map((val) => (
              <li key={val.id}>
                <button
                  key={val.id}
                  onClick={() => {
                    toggleActive(val.id);
                    setMousedOver(true);
                    setTimeout(() => setMousedOver(false), 300);
                  }}
                  className={
                    activeState === val.id
                      ? "crew-carousel-button active"
                      : "crew-carousel-button"
                  }
                ></button>
              </li>
            ))}
          </ul>
        </div>

        <div className="crew-carousel-images">
          {props.crewVal.map((val) => (
            <img
              key={val.id}
              onMouseOver={() => setMousedOver(true)}
              onMouseOut={() => setMousedOver(false)}
              className={
                activeState === val.id
                  ? "crew-carousel-img active"
                  : "crew-carousel-img"
              }
              src={val.img}
              alt={val.name}
            />
          ))}
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="crew-carousel-inner sm-screen">
        <div className="crew-carousel-images">
          {props.crewVal.map((val) => (
            <img
              key={val.id}
              onMouseOver={() => setMousedOver(true)}
              onMouseOut={() => setMousedOver(false)}
              className={
                activeState === val.id
                  ? "crew-carousel-img active"
                  : "crew-carousel-img"
              }
              src={val.img}
              alt={val.name}
            />
          ))}
        </div>
        <div className="crew-carousel-indicators">
          <ul>
            {props.crewVal.map((val) => (
              <li key={val.id}>
                <button
                  key={val.id}
                  onClick={() => {
                    toggleActive(val.id);
                    setMousedOver(true);
                    setTimeout(() => setMousedOver(false), 300);
                  }}
                  className={
                    activeState === val.id
                      ? "crew-carousel-button active"
                      : "crew-carousel-button"
                  }
                >
                  <span
                    key={val.id}
                    className="crew-carousel-transition"
                  ></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="crew-carousel-info">
          {props.crewVal.map((val) => (
            <div
              tabIndex={activeState === val.id ? "1" : ""}
              onMouseOver={() => setMousedOver(true)}
              onMouseOut={() => setMousedOver(false)}
              key={val.id}
              className={
                activeState === val.id
                  ? "crew-carousel-info-inner active"
                  : "crew-carousel-info-inner"
              }
            >
              <h2>{val.occupation}</h2>
              <h1>{val.name}</h1>
              {val.descMobile}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrewCarousel;
