import { useEffect, useState } from "react";

function GetScores() {
  const [data, setData] = useState([]);

  async function getScores() {
    const access_key = "9651c1a2da7441a8ab810b656d815648";
    const APIlink = `https://api.sportsdata.io/v3/nhl/scores/json/AllTeams`;
    const response = await fetch(APIlink, {
      headers: {
        "Ocp-Apim-Subscription-Key": access_key,
      },
    });
    const resData = await response.json();
    setData(resData);
  }
  useEffect(() => {
    getScores();
  }, []);

  return data;
}
export default GetScores;
