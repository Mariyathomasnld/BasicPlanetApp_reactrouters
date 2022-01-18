import React from "react";
import data from "../data/planets";
import PlanetCard from "../components/planetCard";

//only get planets with rings
const planetsWithRings = data.filter((planet) => planet.hasRings);
console.log("rings", planetsWithRings);

const PlanetsWithRings = () => {
  return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Planets that has Rings </h1>

      
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
          : planetsWithRings.map((planet, index) => (
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
};

export default PlanetsWithRings;
