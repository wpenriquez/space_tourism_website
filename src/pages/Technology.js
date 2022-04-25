import React, { useState } from "react";
import "../css/technology.css";
import firstTech from "../assets/technology/image-launch-vehicle-portrait.jpg";
import secondTech from "../assets/technology/image-spaceport-portrait.jpg";
import thirdTech from "../assets/technology/image-space-capsule-portrait.jpg";
import firstTechLand from "../assets/technology/image-launch-vehicle-landscape.jpg";
import secondTechLand from "../assets/technology/image-spaceport-landscape.jpg";
import thirdTechLand from "../assets/technology/image-space-capsule-landscape.jpg";
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
      techDescMobile: (
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      ),
      techImg: firstTech,
      techImgLand: firstTechLand,
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
      techDescMobile: (
        <p>
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      ),
      techImg: secondTech,
      techImgLand: secondTechLand,
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
      techDescMobile: (
        <p>
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      ),
      techImg: thirdTech,
      techImgLand: thirdTechLand,
    },
  ];

  const [activeState, changeState] = useState(1);

  return (
    <section className="section-tech">
      {/* DESKTOP VIEW */}
      <div className="section-items lg-screen">
        <div className="tech-intro">
          <span>03</span>SPACE LAUNCH 101
        </div>
        <TechnologyItems
          techValues={techValues}
          activeState={activeState}
          changeState={changeState}
        />
      </div>

      {/* TABLET VIEW */}
      <div className="section-items md-screen">
        <div className="tech-intro">
          <span>03</span>SPACE LAUNCH 101
        </div>
        <TechnologyItems
          techValues={techValues}
          activeState={activeState}
          changeState={changeState}
        />
      </div>

      {/* MOBILE VIEW */}
      <div className="section-items sm-screen">
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
