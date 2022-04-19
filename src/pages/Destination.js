import React, { useState } from "react";
import "../css/destination.css";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import HeavenlyBodies from "../components/HeavenlyBodies";

const Destination = () => {
  const destValues = [
    {
      id: 1,
      name: "MOON",
      image: moon,
      info: `See our planet as you’ve never seen it before. A perfect
      relaxing trip away to help regain perspective and come back
      refreshed. While you’re there, take in some history by
      visiting the Luna 2 and Apollo 11 landing sites.`,
      travel: "3 DAYS",
      distance: "384,400 KM",
    },
    {
      id: 2,
      name: "MARS",
      image: mars,
      info: `Don’t forget to pack your hiking boots. You’ll need them 
      to tackle Olympus Mons, the tallest planetary mountain in our 
      solar system. It’s two and a half times the size of Everest!`,
      travel: "9 MONTHS",
      distance: "225 MIL. KM",
    },
    {
      id: 3,
      name: "EUROPA",
      image: europa,
      info: `The smallest of the four Galilean moons orbiting Jupiter, 
      Europa is a winter lover’s dream. With an icy surface, 
      it’s perfect for a bit of ice skating, curling, hockey, or 
      simple relaxation in your snug wintery cabin.`,
      travel: "3 YEARS",
      distance: "625 MIL. KM",
    },
    {
      id: 4,
      name: "TITAN",
      image: titan,
      info: `The only moon known to have a dense atmosphere other than Earth, 
      Titan is a home away from home (just a few hundred degrees colder!). 
      As a bonus, you get striking views of the Rings of Saturn.`,
      travel: "7 YEARS",
      distance: "1.6 BIL. KM",
    },
  ];

  const [activeState, changeState] = useState(1);

  return (
    <section className="section-destination">
      <div className="section-items">
        <div className="destination-intro">
          <h3>
            <span>01</span>PICK YOUR DESTINATION
          </h3>
        </div>
        <HeavenlyBodies
          destValues={destValues}
          activeState={activeState}
          changeState={changeState}
        />
        {/* <div className="heavenly-bodies-section">
          <div className="heavenly-body-img">
            {destValues.map((val, index) => (
              <img
                key={val.id}
                className={
                  activeState === val.id ? "body-img active" : "body-img"
                }
                src={val.image}
                alt={val.name}
              />
            ))}
          </div>
          <div className="heavenly-body-info">
            <div className="heavenly-body-nav">
              <ul>
                {destValues.map((val, index) => (
                  <li key={val.id}>
                    <button
                      className={
                        activeState === val.id
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
            <div className="heavenly-body-present" tabIndex="1">
              <div className="heavenly-body-name">
                <h3>{body.bName}</h3>
              </div>
              <div className="heavenly-body-present-desc">
                <p>{body.bInfo}</p>
              </div>
              <br />
              <div className="destination-items" tabIndex="2">
                <div className="destination-line"></div>
                <table>
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
                        {body.bDistance}
                      </td>
                      <td className="destination-values travel">
                        {body.bTravel}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Destination;
