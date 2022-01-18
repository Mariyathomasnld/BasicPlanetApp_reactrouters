import "./App.css";
import { Routes, Route } from "react-router";

import AllPlanets from "./pages/AllPlanets";
import PlanetsWithRings from "./pages/PlanetsWithRings";
import PlanetsAndTheirMoons from "./pages/PlanetsAndTheirMoons";
import { Link } from "react-router-dom";

function App() {
  return (
  <div className="App">


<div className="navigation">
        <Link to="/">AllPlanets</Link>
        <br></br>
        <Link to="/planetsWithRings">Planet With rings</Link>
        <br></br>
        <Link to="/planetsandtheirmoons">Planets and their Moons</Link>
      </div>
      

        <Routes>
        <Route path="/" element={<AllPlanets />} />
        <Route path="/planetsWithRings" element={<PlanetsWithRings />} />
        <Route
          path="/planetsandtheirmoons"
          element={<PlanetsAndTheirMoons />}
        />
      </Routes>
    </div>
  );
}

export default App;
