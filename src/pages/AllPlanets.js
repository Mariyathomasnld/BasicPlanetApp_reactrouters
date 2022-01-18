import { Link } from "react-router-dom";
import data from "../data/planets";
import PlanetCard from "../components/planetCard";

export default function Planets() {
  console.log("data", data);

 return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Planets in the Solar System </h1>
    
      {/* {!data 
        ? "Loading" 
        : data.map(planet => <p>{planet.name}</p>)} */}
      <div
        className="card-grid"
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "space-around",
        //   flexWrap: "wrap",
        // }}
      >
        {!data
          ? "Loading"
          : data.map((planet, index) => (
              <div key={index}>
                <PlanetCard
                  name={planet.name}
                  hasRings={planet.hasRings}
                  diameter={planet.diameter}
                  imgUrl={planet.imgUrl}
                  moons={planet.moons}
                />
              </div>
            ))}
      </div>
    </div>
  );
}
