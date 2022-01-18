import React from "react";
import data from "../data/planets";
import PlanetCard from "../components/planetCard";


const onlyPlanetsWithMoons = data.filter((planet) => planet.moons.length > 1);
console.log("moons", onlyPlanetsWithMoons);

function PlanetsAndTheirMoons() {
  const onlyPlanetsWithMoons = data.filter((planet) => planet.moons);
  console.log("moons", onlyPlanetsWithMoons);

  return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Planets and their Moons </h1>
     

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
          : onlyPlanetsWithMoons.map((planet, index) => (
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

export default PlanetsAndTheirMoons;
