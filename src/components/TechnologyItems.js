import React from "react";

const TechnologyItems = (props) => {
  const toggleActive = (val) => {
    props.changeState(val);
  };
  return (
    <div className="tech-items">
      {/* DESKTOP VIEW */}
      <div className="tech-desc-items lg-screen">
        <div className="tech-btns">
          <ul>
            {props.techValues.map((val, index) => (
              <li key={val.id}>
                <button
                  onClick={() => toggleActive(val.id, index)}
                  className={
                    props.activeState === val.id
                      ? "tech-button active"
                      : "tech-button"
                  }
                >
                  {val.id}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="tech-info">
          <h5>THE TERMINOLOGY...</h5>
          {props.techValues.map((val) => (
            <div
              tabIndex={props.activeState === val.id ? "1" : ""}
              key={val.id}
              className={
                props.activeState === val.id
                  ? "tech-name-desc active"
                  : "tech-name-desc"
              }
            >
              <h1>{val.techName}</h1>
              {val.techDesc}
            </div>
          ))}
        </div>
        <div className="tech-img">
          {props.techValues.map((val) => (
            <img
              key={val.id}
              className={
                props.activeState === val.id
                  ? "tech-photo active"
                  : "tech-photo"
              }
              src={val.techImg}
              alt={val.techName}
            />
          ))}
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="tech-desc-items sm-screen">
        <div className="tech-img">
          {props.techValues.map((val) => (
            <img
              key={val.id}
              className={
                props.activeState === val.id
                  ? "tech-photo active"
                  : "tech-photo"
              }
              src={val.techImgLand}
              alt={val.techName}
            />
          ))}
        </div>
        <div className="tech-btns">
          <ul>
            {props.techValues.map((val, index) => (
              <li key={val.id}>
                <button
                  onClick={() => toggleActive(val.id, index)}
                  className={
                    props.activeState === val.id
                      ? "tech-button active"
                      : "tech-button"
                  }
                >
                  {val.id}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="tech-info">
          <h5>THE TERMINOLOGY...</h5>
          {props.techValues.map((val) => (
            <div
              tabIndex={props.activeState === val.id ? "1" : ""}
              key={val.id}
              className={
                props.activeState === val.id
                  ? "tech-name-desc active"
                  : "tech-name-desc"
              }
            >
              <h1>{val.techName}</h1>
              {val.techDescMobile}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyItems;
