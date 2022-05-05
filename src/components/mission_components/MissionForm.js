import React, { useEffect, useState } from "react";

const MissionForm = (props) => {
  const [year, setYear] = useState([]);

  let keyWord, launchPads, minYear, maxYear;

  const checkYearRange = (min, max) => {
    if (!isNaN(parseInt(min))) {
      if (!isNaN(parseInt(max))) {
        if (parseInt(min) > parseInt(max)) {
          alert("Invalid year range");
        }
      }
    }
  };

  const submitHandler = (event, mobile, tablet) => {
    event.preventDefault();

    if (mobile) {
      keyWord = document.querySelector(
        ".section-items.sm-screen  #keywords.mobile"
      ).value;
      launchPads = document.querySelector(
        ".section-items.sm-screen  #launchpads.mobile"
      ).value;
      minYear = document.querySelector(
        ".section-items.sm-screen  #min-year.mobile"
      ).value;
      maxYear = document.querySelector(
        ".section-items.sm-screen  #max-year.mobile"
      ).value;
    } else if (tablet) {
      keyWord = document.querySelector(
        ".section-items.md-screen  #keywords.tablet"
      ).value;
      launchPads = document.querySelector(
        ".section-items.md-screen  #launchpads.tablet"
      ).value;
      minYear = document.querySelector(
        ".section-items.md-screen  #min-year.tablet"
      ).value;
      maxYear = document.querySelector(
        ".section-items.md-screen  #max-year.tablet"
      ).value;
    } else {
      keyWord = document.querySelector("#keywords").value;
      launchPads = document.querySelector("#launchpads").value;
      minYear = document.querySelector("#min-year").value;
      maxYear = document.querySelector("#max-year").value;
    }

    checkYearRange(minYear, maxYear);

    props.setForcePage(0);

    props.setSearch({
      keyword: keyWord,
      launchpad: launchPads,
      minyear: minYear,
      maxyear: maxYear,
    });
  };

  useEffect(() => {
    const yearArr = [];
    const computeYear = () => {
      for (let i = 0; i < props.launch.length; i++) {
        let d = new Date(props.launch[i].launch_date_local);
        let fullYear = d.getFullYear();
        if (yearArr.indexOf(fullYear) === -1) {
          yearArr.push(fullYear);
        }
      }
      setYear(yearArr);
    };
    computeYear();
  }, [props.launch, props.search]);

  return (
    <div className="form-container">
      {/* DESKTOP VIEW */}
      <form
        className="missions-form lg-screen"
        action=""
        onSubmit={(evt) => {
          submitHandler(evt);
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Keywords</th>
              <th>Launch Pad</th>
              <th>Min Year</th>
              <th>Max Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="keywords-input">
                <input type="text" id="keywords" placeholder="e.g. Falcon" />
              </td>
              <td className="launchpads-select">
                <select name="launchpads" id="launchpads">
                  <option value="">Any</option>
                  {props.launchpad.map((val) => (
                    <option key={val.id} value={val.id}>
                      {val.full_name}
                    </option>
                  ))}
                </select>
              </td>
              <td className="min-year-select">
                {/* MIN YEAR */}
                <select name="min-year" id="min-year">
                  <option value="">Any</option>
                  {year.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
              <td className="max-year-select">
                {/* MAX YEAR */}
                <select name="max-year" id="max-year">
                  <option value="">Any</option>
                  {year.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
              <td className="form-apply">
                <input className="apply-btn" type="submit" value="Apply" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* TABLET VIEW */}
      <form
        action=""
        className="missions-form md-screen"
        onSubmit={(evt) => {
          submitHandler(evt, false, true);
        }}
      >
        <table>
          <tbody>
            <tr>
              <td colSpan="2" className="label">
                Keyword
              </td>
            </tr>
            <tr>
              <td className="keywords-input" colSpan="3">
                {/* KEYWORD INPUT */}
                <input
                  type="text"
                  id="keywords"
                  className="tablet"
                  placeholder="e.g. Falcon"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="label">
                Launchpad
              </td>
            </tr>
            <tr>
              <td className="launchpads-select" colSpan="3">
                {/* LAUNCHPAD SELECT */}
                <select name="launchpads" id="launchpads" className="tablet">
                  <option value="">Any</option>
                  {props.launchpad.map((val) => (
                    <option key={val.id} value={val.id}>
                      {val.full_name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td className="label">Min Year</td>
              <td className="label">Max Year</td>
            </tr>
            <tr>
              <td className="min-year-select">
                {/* MIN YEAR SELECT */}
                <select name="min-year" id="min-year" className="tablet">
                  <option value="">Any</option>
                  {year.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
              <td className="max-year-select">
                {/* MAX YEAR SELECT */}
                <select name="max-year" id="max-year" className="tablet">
                  <option value="">Any</option>
                  {year.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
              {/* APPLY BUTTON */}
              <td className="form-apply">
                <input className="apply-btn" type="submit" value="Apply" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* MOBILE VIEW */}
      <form
        action=""
        className="missions-form sm-screen"
        onSubmit={(evt) => submitHandler(evt, true, false)}
      >
        <table>
          <thead>
            <tr>
              <td colSpan="2" className="label">
                Keyword
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="keywords-input" colSpan="2">
                {/* KEYWORD INPUT */}
                <input
                  type="text"
                  id="keywords"
                  className="mobile"
                  placeholder="e.g. Falcon"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="label">
                Launchpad
              </td>
            </tr>
            <tr>
              <td className="launchpads-select" colSpan="2">
                {/* LAUNCHPAD SELECT */}
                <select name="launchpads" id="launchpads" className="mobile">
                  <option value="">Any</option>
                  {props.launchpad.map((val) => (
                    <option key={val.id} value={val.id}>
                      {val.full_name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td className="label">Min Year</td>
              <td className="label">Max Year</td>
            </tr>
            <tr>
              <td className="min-year-select">
                {/* MIN YEAR SELECT */}
                <select name="min-year" id="min-year" className="mobile">
                  <option value="">Any</option>
                  {year.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
              <td className="max-year-select">
                {/* MAX YEAR SELECT */}
                <select name="max-year" id="max-year" className="mobile">
                  <option value="">Any</option>
                  {year.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              {/* APPLY BUTTON */}
              <td className="form-apply" colSpan="2">
                <input className="apply-btn" type="submit" value="Apply" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default MissionForm;
