import React from "react";

const HeavenlyBodies = (props) => {
  const toggleActive = (val, index) => {
    props.changeState(val);

    // props.setBody({
    //   bImage: props.destValues[index].image,
    //   bName: props.destValues[index].name,
    //   bInfo: props.bodyInfo[index],
    //   bDistance: props.destValues[index].distance,
    //   bTravel: props.destValues[index].travel,
    // });
  };

  return (
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
        {/* <div className="heavenly-body-present" tabIndex="1" >
          <div className="heavenly-body-name">
            <h3>{props.body.bName}</h3>
          </div>
          <div className="heavenly-body-present-desc">
            <p>{props.body.bInfo}</p>
          </div>
          <br />
          <div className="destination-items" tabIndex="2">
            <div className="destination-line"></div>
            <table>
              <thead>
                <tr>
                  <th className="destination-label">AVG. DISTANCE</th>
                  <th className="destination-label">ESTIMATED TRAVEL TIME</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="destination-values distance">
                    {props.body.bDistance}
                  </td>
                  <td className="destination-values travel">
                    {props.body.bTravel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
        {props.destValues.map((val) => (
          <div
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
              <table>
                <thead>
                  <tr>
                    <th className="destination-label">AVG. DISTANCE</th>
                    <th className="destination-label">ESTIMATED TRAVEL TIME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="destination-values distance">
                      {val.distance}
                    </td>
                    <td className="destination-values travel">{val.travel}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeavenlyBodies;
