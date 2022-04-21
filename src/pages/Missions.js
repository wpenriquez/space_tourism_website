import React, { useState, useEffect } from "react";
import "../css/missions.css";
import chevron from "../assets/missions/down-chevron.svg";
import $ from "jquery";
import axios from "axios";
import MissionCard from "../components/MissionCard";
import MissionForm from "../components/MissionForm";

const Missions = () => {
  const [launch, setLaunch] = useState([]);
  const [launchPad, setLaunchPad] = useState([]);
  const [search, setSearch] = useState({
    keyword: "",
    launchpad: "",
    minyear: "",
    maxyear: "",
  });
  const [matchLength, setMatchLength] = useState(0);
  const [matches, setMatch] = useState([]);
  const [filteredByKeyword, setKeyword] = useState([]);
  const [filteredByLaunchpad, setLaunchPadState] = useState([]);
  const [filteredByYear, setYear] = useState([]);
  const [displayResults, setResults] = useState([]);

  const onlineApi =
    "https://space-tourism-launches-default-rtdb.firebaseio.com/data.json";

  //_____________________________________________//
  // USE EFFECT FOR GETTING DATA FROM ONLINE API //
  //---------------------------------------------//
  useEffect(() => {
    const loadLaunches = async () => {
      axios
        .get(onlineApi)
        .then((res) => {
          setLaunch(res.data.launches);
          setLaunchPad(res.data.launchpads);
        })
        .catch((err) => console.log(err));
    };

    loadLaunches();
  }, []);

  //___________________________________________________________________//
  // USE EFFECT FOR UPDATING FILTER VALUES COMING FROM MissionsForm.js //
  //-------------------------------------------------------------------//
  useEffect(() => {
    //________________________//
    // SET RESULTS TO DISPLAY //
    //------------------------//
    const checkValues = () => {
      setResults(filteredByYear);
    };

    //_______________________//
    // FILTER SEARCH BY YEAR //
    //-----------------------//
    const filterSearchByYear = () => {
      const filterYear = filteredByLaunchpad.filter((val) => {
        let d = new Date(val.launch_date_local);
        let fullYear = d.getFullYear();
        let minYear = parseInt(search.minyear);
        let maxYear = parseInt(search.maxyear);
        if (!isNaN(minYear)) {
          if (!isNaN(maxYear)) {
            if (fullYear >= minYear && fullYear <= maxYear) {
              return val;
            } else {
              return null;
            }
          } else {
            if (fullYear >= minYear) {
              return val;
            } else {
              return null;
            }
          }
        } else if (!isNaN(maxYear)) {
          if (fullYear <= maxYear) {
            return val;
          } else {
            return null;
          }
        } else {
          return null;
        }
      });
      setYear(filterYear);
    };

    //____________________________//
    // FILTER SEARCH BY LAUNCHPAD //
    //----------------------------//
    const filterSearchByLaunchPad = () => {
      const filterLaunchPad = filteredByKeyword.filter((val) => {
        const regex = new RegExp(`${search.launchpad}`, "gi");
        return val.launch_site.site_id.match(regex);
      });
      setLaunchPadState(filterLaunchPad);

      if (search.minyear !== "" || search.maxyear !== "") {
        filterSearchByYear();
      } else {
        setYear(filteredByLaunchpad);
      }
    };

    //__________________________//
    // FILTER SEARCH BY KEYWORD //
    //--------------------------//
    const filterSearchByKeyword = () => {
      const filterKeyword = launch.filter((val) => {
        const regex = new RegExp(`${search.keyword}`, "gi");
        return (
          val.rocket.rocket_name.match(regex) ||
          val.payloads[0].payload_id.match(regex) ||
          val.flight_number === parseInt(search.keyword)
        );
      });

      setKeyword(filterKeyword);

      if (search.launchpad !== "") {
        filterSearchByLaunchPad();
      } else if (search.minyear !== "" || search.maxyear !== "") {
        setLaunchPadState(filteredByKeyword);
        filterSearchByYear();
      } else {
        setYear(filteredByKeyword);
      }
    };

    //_____________________________________________________//
    // CALL FUNCTION TO CHANGE HEIGHT OF RESULTS CONTAINER //
    //-----------------------------------------------------//
    const changeResultsHeight = () => {
      if (matches.length <= 3) {
        document.querySelector(".missions-result-container").style.height =
          "585px";
        document.querySelector(
          ".section-items.sm-screen .missions-result-container"
        ).style.height = "850px";
      } else {
        document.querySelector(".missions-result-container").style.height =
          "auto";
        document.querySelector(
          ".section-items.sm-screen .missions-result-container"
        ).style.height = "auto";
      }
    };

    //______________//
    // START FILTER //
    //--------------//
    filterSearchByKeyword();

    //________________________________________//
    // CALL FUNCTION TO SET VALUES TO DISPLAY //
    //----------------------------------------//
    checkValues();

    setMatch(displayResults);
    setMatchLength(matches.length);

    //_____________________________________________________________//
    // CALL FUNCTION TO CHANGE HEIGHT IF 3 OR LESS ITEMS ARE SHOWN //
    //-------------------------------------------------------------//
    changeResultsHeight();
  }, [
    search,
    matches.length,
    launch,
    filteredByLaunchpad,
    filteredByKeyword,
    filteredByYear,
    displayResults,
  ]);

  //_____________________________________//
  // FUNCTION TO SMOOTHLY SCROLL TO FORM //
  //-------------------------------------//
  const scrollToForm = (form) => {
    $("html,body").animate(
      {
        scrollTop: $(form).offset().top,
      },
      500
    );
  };

  //_______________________________________________//
  // FUNCTION TO SMOOTHLY SCROLL TO TOP OF RESULTS //
  //-----------------------------------------------//
  const scrollToTop = (top, offset) => {
    $("html,body").animate(
      {
        scrollTop: $(top).position().top + offset,
      },
      500
    );
  };

  return (
    <section className="section-missions">
      {/* DESKTOP VIEW */}
      <div className="section-items lg-screen">
        <div className="missions-head">
          <div className="missions-intro">
            <h1>DISCOVER SPACE MISSIONS</h1>
          </div>
          <div
            onKeyDown={(e) => {
              const form = ".missions-content";
              if (e.keyCode === 13) {
                scrollToForm(form);
              }
            }}
            onClick={() => {
              const form = ".missions-content";
              scrollToForm(form);
            }}
            className="missions-down-btn"
            tabIndex="0"
          >
            <img src={chevron} alt="" />
          </div>
        </div>
        <div id="missions-content" className="missions-content">
          <MissionForm
            launchpad={launchPad}
            launch={launch}
            search={search}
            setSearch={setSearch}
          />

          <div id="missions-body" className="missions-body">
            <div className="missions-results">
              <div className="missions-search-results">
                <p>
                  {matchLength > 1
                    ? `Showing ${matchLength} Missions`
                    : matchLength === 1
                    ? `Showing ${matchLength} Mission`
                    : `No Missions Found`}
                </p>
              </div>
              <div className="missions-result-container">
                {matches.map((val) => (
                  <MissionCard
                    key={val.flight_number}
                    value={val}
                    launchpad={launchPad}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="missions-footer">
            <p>Copyright © 2022 </p>
            <button
              id="test"
              onClick={() => {
                const top = ".missions-content";
                scrollToTop(top, 125);
              }}
            >
              Back to top
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="section-items sm-screen">
        <div className="missions-head">
          <div className="missions-intro">
            <h1>DISCOVER SPACE MISSIONS</h1>
          </div>
          <div
            onClick={() => {
              const form = ".section-items.sm-screen > .missions-content";
              scrollToForm(form);
            }}
            className="missions-down-btn"
            tabIndex="0"
          >
            <img src={chevron} alt="" />
          </div>
        </div>
        <div id="missions-content" className="missions-content">
          <MissionForm
            launchpad={launchPad}
            launch={launch}
            search={search}
            setSearch={setSearch}
          />
          <div id="missions-body" className="missions-body">
            <div className="missions-results">
              <div className="missions-search-results">
                <p>
                  {matchLength > 1
                    ? `Showing ${matchLength} Missions`
                    : matchLength === 1
                    ? `Showing ${matchLength} Mission`
                    : `No Missions Found`}
                </p>
              </div>
              <div className="missions-result-container">
                {matches.map((val) => (
                  <MissionCard
                    key={val.flight_number}
                    value={val}
                    launchpad={launchPad}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="missions-footer">
            <p>Copyright © 2022 </p>
            <button
              id="test"
              onClick={() => {
                const top = ".section-items.sm-screen > .missions-content";
                scrollToTop(top, 100);
              }}
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;
