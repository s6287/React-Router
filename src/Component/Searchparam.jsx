import React from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const color = searchParams.get("color") || "white"; // Default color

  return (
    <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
      <h2>Background Color: {color}</h2>
      <button onClick={() => setSearchParams({ color: "red" })}>Red</button>
      <button onClick={() => setSearchParams({ color: "blue" })}>Blue</button>
      <button onClick={() => setSearchParams({ color: "green" })}>Green</button>
      <button onClick={() => setSearchParams({})}>Reset</button>
    </div>
  );
}

export default Search;
