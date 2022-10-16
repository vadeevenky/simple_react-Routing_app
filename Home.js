import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Hello Home Page Component</h1>
      <p>jkhdslsjkklf klkhfdfj jkljfkldfkj</p>
      <Link to="/contact">about contact details</Link>
    </div>
  );
}

export default Home;
