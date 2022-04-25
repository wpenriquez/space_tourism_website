import React, { useMemo } from "react";
import Carousel from "../components/CrewCarousel";
import "../css/crew.css";
import ansari from "../assets/crew/image-anousheh-ansari.png";
import hurley from "../assets/crew/image-douglas-hurley.png";
import glover from "../assets/crew/image-victor-glover.png";
import shuttleworth from "../assets/crew/image-mark-shuttleworth.png";

const Crew = () => {
  const crewValues = useMemo(
    () => [
      {
        id: 1,
        occupation: "COMMANDER",
        name: "DOUGLAS HURLEY",
        img: hurley,
        desc: (
          <p>
            Douglas Gerald Hurley is an American engineer, former
            <br />
            Marine Corps pilot and former NASA astronaut. He
            <br />
            launched into space for the third time as commander of
            <br />
            Crew Dragon Demo-2.
          </p>
        ),
        descMobile: (
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        ),
      },
      {
        id: 2,
        occupation: "MISSION SPECIALIST",
        name: "MARK SHUTTLEWORTH",
        img: shuttleworth,
        desc: (
          <p>
            Mark Richard Shuttleworth is the founder and CEO of
            <br />
            Canonical, the company behind the Linux-based Ubuntu
            <br />
            operating system. Shuttleworth became the first South
            <br />
            African to travel to space as a space tourist.
          </p>
        ),
        descMobile: (
          <p>
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        ),
      },
      {
        id: 3,
        occupation: "PILOT",
        name: "VICTOR GLOVER",
        img: glover,
        desc: (
          <p>
            Pilot on the first operational flight of the SpaceX Crew
            <br />
            Dragon to the International Space Station. Glover is a<br />
            commander in the U.S. Navy where he pilots an F/A-18.He
            <br />
            was a crew member of Expedition 64, and served as a<br />
            station systems flight engineer.
          </p>
        ),
        descMobile: (
          <p>
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        ),
      },
      {
        id: 4,
        occupation: "FLIGHT ENGINEER",
        name: "ANOUSHEH ANSARI",
        img: ansari,
        desc: (
          <p>
            Anousheh Ansari is an Iranian American engineer and
            <br />
            co-founder of Prodea Systems. Ansari was the fourth
            <br />
            self-funded space tourist, the first self-funded woman to
            <br />
            fly to the ISS, and the first Iranian in space.
          </p>
        ),
        descMobile: (
          <p>
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        ),
      },
    ],
    []
  );

  return (
    <section className="section-crew">
      {/* DESKTOP VIEW */}
      <div className="section-items lg-screen">
        <div className="crew-intro">
          <span>02</span>MEET YOUR CREW
        </div>
        <Carousel crewVal={crewValues} />
      </div>

      {/* MOBILE VIEW */}
      <div className="section-items sm-screen">
        <div className="crew-intro">
          <span>02</span>MEET YOUR CREW
        </div>
        <Carousel crewVal={crewValues} />
      </div>

      {/* TABLET VIEW */}
      <div className="section-items md-screen">
        <div className="crew-intro">
          <span>02</span>MEET YOUR CREW
        </div>
        <Carousel crewVal={crewValues} />
      </div>
    </section>
  );
};

export default Crew;
