import { useEffect, useState } from "react";

function GetScores() {
  const [data, setData] = useState([]);// use useReducer for ,new function to deal with function returning

  async function getScores() {
    const access_key = "9651c1a2da7441a8ab810b656d815648";
    const APIlink = `https://api.sportsdata.io/v3/nhl/scores/json/AllTeams`;
    const response = await fetch(APIlink, {
      headers: {
        "Ocp-Apim-Subscription-Key": access_key,
      },
    });
    const resData = await response.json();
    const divisionNorth = resData.filter((e) => e.Division === "North");
    const divisionWest = resData.filter((e) => e.Division === "West");
    const divisionEast = resData.filter((e) => e.Division === "East");
    const divisionCentral = resData.filter((e) => e.Division === "Central");
    const Divisions = [divisionEast,divisionNorth,divisionWest,divisionCentral]
    setData(Divisions);
  }
  useEffect(() => {
    getScores();
  }, []);

  return data;
}
export default GetScores;
