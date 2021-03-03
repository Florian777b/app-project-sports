import '../styles/App.css'
import React, {useState, useEffect} from "react";
import { Route, Link} from "react-router-dom";
import Sponsors from "./Sponsors";
import Teams from "./Teams";
import LoginPopup from "./LoginPopup";



function App() {
    const [loginPopupVisible, setLoginPopupVisible] = useState(false);
    const [user, setUser]  = useState(null);

    const [data, setData] = useState([])
    const access_key = "9651c1a2da7441a8ab810b656d815648";
    const APIlink = `https://api.sportsdata.io/v3/nhl/scores/json/AllTeams`
  
    async function getScores() {
      const response = await fetch(APIlink,{
        headers: {
          "Ocp-Apim-Subscription-Key": access_key
        }
        
      })
      const resData = await response.json()
      setData(resData.results)
    }

    useEffect(() => {
      getScores()
    }, [])
       

 

  return (
    <div>
      <nav classname="nav nav-pills">
        
          <ul>
              <li>
              <Link classname="nav-link" to="/">Teams</Link>
              </li>
              <li>
              <Link classname="nav-link" to="/sponsors">Sponsors</Link>
              </li>
              <li>
              <Link classname="nav-link" to="/contact us">Contact us</Link>
              </li>
              <li>
              {user ? ("🧔") : ("") }
              <button onClick={() => setLoginPopupVisible(!loginPopupVisible)}>Login</button>
               {loginPopupVisible && <LoginPopup loginUser={setUser}  closePopup={setUser}/>}; 
              </li>
          </ul>
        
      </nav>


    
      <Route path="/" exact> 
        <Sponsors />
      </Route>
      <Route path="/Teams">
        <Teams />
      </Route>
    </div>
  );
}
export default App;

