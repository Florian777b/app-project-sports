import "../styles/App.css";
import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Sponsors from "./Sponsors";
import Teams from "./Teams";
import LoginPopup from "./LoginPopup";

function App() {
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const [user, setUser] = useState(null);
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

  const [backgroundpic, setBackgroundpic] = useState({});

  async function getBackgroundpic() {
    const access_key_unsplash = "fsVPtOvpYiuWJp6IpCC6lj8dVdZIK_wJO1ByH0J-alY";
    const query = "winter+sports";
    const APIlink2 = `https://api.unsplash.com/photos/random?query=${query}&client_id=${access_key_unsplash}`;
    const response = await fetch(APIlink2);
    const resData = await response.json();
    setBackgroundpic(resData);
  }
  useEffect(() => {
    getBackgroundpic();
  }, []);
  console.log(backgroundpic);

  let linktopicture;
  if (backgroundpic.urls) {
    linktopicture = backgroundpic.urls.regular;
  } else {
    linktopicture = "../Images/1436808.jpg";
  }

  return (
    <div
      className="backgroundpic"
      style={{
        backgroundImage: `url("${linktopicture}")`,
      }}
    >
      <nav className="nav nav-pills">
        <ul>
          <li>
            <Link className="nav-link" to="/Teams">
              Teams
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/sponsors">
              Sponsors
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact us">
              Contact us
            </Link>
          </li>
          <li>
            {user ? "🧔" : ""}
            <button onClick={() => setLoginPopupVisible(!loginPopupVisible)}>
              Login
            </button>
            {loginPopupVisible && (
              <LoginPopup loginUser={setUser} closePopup={setUser} />
            )}
            ;
          </li>
        </ul>
      </nav>

      

      <Route path="/Sponsors" >
        <Sponsors />
      </Route>
      <Route path="/Teams">
        <Teams data={data}/>
      </Route>
    </div>
  );
}
export default App;
