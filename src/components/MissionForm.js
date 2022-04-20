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

  const submitHandler = (event) => {
    event.preventDefault();

    keyWord = document.querySelector("#keywords").value;
    launchPads = document.querySelector("#launchpads").value;
    minYear = document.querySelector("#min-year").value;
    maxYear = document.querySelector("#max-year").value;

    checkYearRange(minYear, maxYear);

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
    <form
      className="missions-form"
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
  );
};

export default MissionForm;
