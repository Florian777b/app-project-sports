import DivisionCentral from './Divisioncentral'
import DivisionWest from './Divisionwest'
import divisionNorth from './Divisionnorth'
import divisionEast from './Divisioneast'
import "../styles/App.css";
import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Sponsors from "./Sponsors";
import Teams from "./Teams";
import LoginPopup from "./LoginPopup";
import Contactus from "./Contactus"

export let LoginContext

function App() {
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [backgroundpic, setBackgroundpic] = useState({});

  async function loginUser(userData) {
    const res = await fetch("http://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      body: JSON.stringify(userData)
    })
    const data = await res.json()
    if(data.status == "success"){
      console.log("update user", data)
      setUser(data)
    }
    setLoginPopupVisible(false)
  }

  useEffect(() => {
    console.log("user", user)
  }, [user])

  LoginContext = React.createContext({loginUser})

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
            <Link className="nav-link" to="/Sponsors">
              Sponsors
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Contactus">
              Contact us
            </Link>
          </li>
          <li>
            {user ?
              `🧔 ${user.name}`
              : 
              <button onClick={() => setLoginPopupVisible(!loginPopupVisible)}>
                Login
              </button>
            }
            
            {loginPopupVisible && (
              <LoginPopup />
            )}
          </li>
        </ul>
      </nav>

      <Route path="/Sponsors">
        <Sponsors />
      </Route>
      <Route path="/Teams">
        <Teams />
      </Route>
      <Route path="/Contactus">
        <Contactus />
      </Route>
    </div>
  );
}
export default App;
