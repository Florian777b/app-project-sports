import React from "react";
import GetScores from "./GetScores";

function Teams() {
  const data = GetScores() 
  const divisionNorth = data.filter((e) => e.Division === "North");
  const divisionWest = data.filter((e) => e.Division === "West");
  const divisionEast = data.filter((e) => e.Division === "East");
  const divisionCentral = data.filter((e) => e.Division === "Central");
  console.log(divisionNorth);

  return (
    <div className="team-container">
      <h1>Teams Hockey </h1>
      <div className="team-cards">
        {data &&
          data.map((team, index) => {
            return (
              <div className="team" key={index}>
                <li>{team.Name}</li>
                <li>{team.City}</li>
                <li>{team.Division}</li>
                <img
                  className="img-logo"
                  src={team.WikipediaLogoUrl}
                  alt="logo"
                />{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Teams;
