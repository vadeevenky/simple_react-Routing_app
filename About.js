import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1> Hello About Component</h1>
      <p> hello this is the home page paragraph</p>
      <Link to="/">About the home page</Link>
    </div>
  );
}

export default About;
