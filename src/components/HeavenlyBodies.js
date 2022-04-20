import React from "react";

const HeavenlyBodies = (props) => {
  const toggleActive = (val) => {
    props.changeState(val);
  };

  return (
    <div className="heavenly-bodies">
      <div className="heavenly-bodies-section">
        <div className="heavenly-body-img">
          {props.destValues.map((val, index) => (
            <img
              key={val.id}
              className={
                props.activeState === val.id ? "body-img active" : "body-img"
              }
              src={val.image}
              alt={val.name}
            />
          ))}
        </div>
        <div className="heavenly-body-info">
          <div className="heavenly-body-nav">
            <ul>
              {props.destValues.map((val, index) => (
                <li key={val.id}>
                  <button
                    className={
                      props.activeState === val.id
                        ? "heavenly-body-btn active"
                        : "heavenly-body-btn"
                    }
                    onClick={() => {
                      toggleActive(val.id, index);
                    }}
                  >
                    {val.name}
                    <span></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {props.destValues.map((val) => (
            <div
              key={val.id}
              className={
                props.activeState === val.id
                  ? "heavenly-body-present active"
                  : "heavenly-body-present"
              }
              tabIndex={props.activeState === val.id ? "1" : ""}
            >
              <div className="heavenly-body-name">
                <h3>{val.name}</h3>
              </div>
              <div className="heavenly-body-present-desc">
                <p>{val.info}</p>
              </div>
              <br />
              <div
                className="destination-items"
                tabIndex={props.activeState === val.id ? "2" : ""}
              >
                <div className="destination-line"></div>
                <table className="table lg-screen">
                  <thead>
                    <tr>
                      <th className="destination-label">AVG. DISTANCE</th>
                      <th className="destination-label">
                        ESTIMATED TRAVEL TIME
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="destination-values distance">
                        {val.distance}
                      </td>
                      <td className="destination-values travel">
                        {val.travel}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="table sm-screen">
                  <thead>
                    <tr>
                      <td className="avg-distance">AVG. DISTANCE</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="val-distance">{val.distance}</td>
                    </tr>
                    <tr>
                      <td className="travel-time">EST. TRAVEL TIME</td>
                    </tr>
                    <tr>
                      <td className="val-travel">{val.travel}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeavenlyBodies;
