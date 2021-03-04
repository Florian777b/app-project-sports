import React from 'react';

function Teams(props) {
    
    console.log(props.data);
    return (
        
    <div className="team-container">
        <h1>Teams Hockey </h1>
        <div className="team-cards">
            
            {props.data &&
          props.data.map((team, index) => {
            return (
              <div className="team" key={index}>
                <li>
                {team.Name}
                </li>
                <li>
                {team.City}
                </li>
                <li>
                {team.Division}
                </li>
                 
                
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
      
        
    )
}

export default Teams;