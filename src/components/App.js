

import { Route, Link} from "react-router-dom";
import Sponsors from "./Sponsors";
import Teams from "./Teams";
// import Buttons from "./Buttons";


function App() {

  return (
    <div>
      <nav classname="nav nav-pills">
          
        <Link classname="nav-link" to="/">Teams</Link>
        <Link classname="nav-link" to="/sponsors">Sponsors</Link>
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

