import React, { useState } from "react";
import "../css/technology.css";
import firstTech from "../assets/technology/image-launch-vehicle-portrait.jpg";
import secondTech from "../assets/technology/image-spaceport-portrait.jpg";
import thirdTech from "../assets/technology/image-space-capsule-portrait.jpg";
import TechnologyItems from "../components/TechnologyItems";

const Technology = () => {
  const techValues = [
    {
      id: 1,
      techName: "LAUNCH VEHICLE",
      techDesc: (
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled
          <br />
          vehicle used to carry a payload from Earth's surface to
          <br />
          space, usually to Earth orbit or beyond. Our WEB-X
          <br />
          carrier rocket is the most powerful in operation. Standing
          <br />
          150 metres tall, it's quite an awe-inspiring sight on the
          <br />
          launch pad!
        </p>
      ),
      techImg: firstTech,
    },
    {
      id: 2,
      techName: "SPACEPORT",
      techDesc: (
        <p>
          A spaceport or cosmodrome is a site for launching (or
          <br />
          receiving) spacecraft, by analogy to the seaport for ships
          <br />
          or airport for aircraft. Based in the famous Cape
          <br />
          Canaveral, our spaceport is ideally situated to take
          <br />
          advantage of the Earth’s rotation for launch.
        </p>
      ),
      techImg: secondTech,
    },
    {
      id: 3,
      techName: "SPACE CAPSULE",
      techDesc: (
        <p>
          A space capsule is an often-crewed spacecraft that uses
          <br />a blunt-body reentry capsule to reenter the Earth's
          <br />
          atmosphere without wings. Our capsule is where you'll
          <br />
          spend your time during the flight. It includes a space
          <br />
          gym, cinema, and plenty of other activities to keep you
          <br />
          entertained.
        </p>
      ),
      techImg: thirdTech,
    },
  ];

  const [activeState, changeState] = useState(1);

  return (
    <section className="section-tech">
      <div className="section-items">
        <div className="tech-intro">
          <span>03</span>SPACE LAUNCH 101
        </div>
        <TechnologyItems
          techValues={techValues}
          activeState={activeState}
          changeState={changeState}
        />
      </div>
    </section>
  );
};

export default Technology;
