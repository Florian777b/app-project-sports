import React from "react";
import { divisionCentral } from "./Divisioncentral";
import GetScores from "../loaders/GetScores";

function Teams() {
  
  const data = GetScores() 
 

  return (
    
    <div className="team-container container">
      <h1>Teams Hockey </h1>
      <div className="team-cards">

        {data && data.map ((division) => {
          console.log(division);
          return (
            <div className="division">
                {division &&
                      division.map((team, index) => {
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
          )
        })}
        
      </div>
    </div>
  );
}

export default Teams;
