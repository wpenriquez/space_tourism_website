import React from "react";

const MissionCard = (props) => {
  const computeTimeLocation = (dateTime, location, launchLoc) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const event = new Date(dateTime);
    const eMonth = event.getMonth();
    const eDay = event.getDate();
    const eYear = event.getFullYear();

    let eOrdinals;
    if (eDay % 10 === 1 && eDay !== 11) {
      eOrdinals = "st";
    } else if (eDay % 10 === 2 && eDay !== 12) {
      eOrdinals = "nd";
    } else if (eDay % 10 === 3 && eDay !== 13) {
      eOrdinals = "rd";
    } else {
      eOrdinals = "th";
    }

    const eHours = event.getHours();

    let computedHours;
    if (eHours > 12) {
      computedHours = eHours - 12;
    } else if (eHours < 12 && eHours !== 0) {
      computedHours = eHours;
    } else {
      computedHours = 12;
    }

    let amPm;
    if (eHours >= 12) {
      amPm = "pm";
    } else {
      amPm = "am";
    }

    const eMinutes = event.getMinutes();
    let zeroMinutes = eMinutes <= 9 ? "0" : "";

    let fullLoc;

    for (let i = 0; i < launchLoc.length; i++) {
      if (location === launchLoc[i].id) {
        fullLoc = launchLoc[i].full_name;
      }
    }

    return `Launched on ${
      eDay + eOrdinals + " " + months[eMonth] + " " + eYear
    } at ${
      computedHours + ":" + zeroMinutes + eMinutes + amPm
    } from ${fullLoc}`;
  };

  return (
    <div className="mission-item">
      <div className="mission-item-inner">
        <div className="mission-logo">
          <img
            src={
              typeof props.value.links.mission_patch !== "undefined"
                ? props.value.links.mission_patch
                : ""
            }
            alt="Patch_Img"
            width="100%"
          />{" "}
        </div>
        <div className="mission-info">
          <table>
            <thead>
              <tr>
                <td colSpan="5">
                  {props.value.rocket.rocket_name +
                    " - " +
                    (props.value.flight_number === 49
                      ? props.value.payloads[1].payload_id
                      : props.value.payloads[0].payload_id)}
                  {!props.value.land_success || !props.value.launch_success ? (
                    <span>
                      {" "}
                      - <b>Failed Mission</b>
                    </span>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="mission-desc">
                  {computeTimeLocation(
                    props.value.launch_date_local,
                    props.value.launch_site.site_id,
                    props.launchpad
                  )}
                </td>
              </tr>
              <tr className="mission-btns">
                <td>
                  <button
                    onClick={() => {
                      if (
                        typeof props.value.links.reddit_campaign !== "undefined"
                      ) {
                        window
                          .open(props.value.links.reddit_campaign, "_blank")
                          .focus();
                      }
                    }}
                    disabled={
                      typeof props.value.links.reddit_campaign === "undefined"
                        ? true
                        : false
                    }
                  >
                    Reddit Campaign
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (
                        typeof props.value.links.reddit_launch !== "undefined"
                      ) {
                        window
                          .open(props.value.links.reddit_launch, "_blank")
                          .focus();
                      }
                    }}
                    disabled={
                      typeof props.value.links.reddit_launch === "undefined"
                        ? true
                        : false
                    }
                  >
                    Reddit Launch
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (
                        typeof props.value.links.reddit_media !== "undefined"
                      ) {
                        window
                          .open(props.value.links.reddit_media, "_blank")
                          .focus();
                      }
                    }}
                    disabled={
                      typeof props.value.links.reddit_media === "undefined"
                        ? true
                        : false
                    }
                  >
                    Reddit Media
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (typeof props.value.links.presskit !== "undefined") {
                        window
                          .open(props.value.links.presskit, "_blank")
                          .focus();
                      }
                    }}
                    disabled={
                      typeof props.value.links.presskit === "undefined"
                        ? true
                        : false
                    }
                  >
                    Press Kit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (typeof props.value.links.video_link !== "undefined") {
                        window
                          .open(props.value.links.video_link, "_blank")
                          .focus();
                      }
                    }}
                    disabled={
                      typeof props.value.links.video_link === "undefined"
                        ? true
                        : false
                    }
                  >
                    Watch Video
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mission-flight-number">
          <h1>#{props.value.flight_number}</h1>
          <p>Flight Number</p>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
