export default function PlanetCard(props) {
  return (
    <div
      style={{

        
        // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        // hover: "",
        // padding: "16px",
        // margin: "10px 5px",
}}
    >
      <h2 style={{ textAlign: "center" }}>{props.name}</h2>
      <img
        style={{ height: "400px", width: "400px" }}
        src={props.imgUrl}
        alt={"planets"}
      />
      <p>
        <b>Diameter:</b> {props.diameter}km
      </p>
      <p>
        <b>Does it have rings?</b> {props.hasRings ? "Yes" : "No"}
      </p>
      <b> Natural Satellites: </b>
      <br />
      <br />
      {props.moons.map((moon ,index) => (
        <li key={index} style={{listStyle:"none"}}             >{moon}</li>
      ))}
    </div>
  );
}
