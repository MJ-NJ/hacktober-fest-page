import React from "react";
import './landing.css';
function Landing(){
    return(
        <>
        <img src = {require("./logo.png")}></img>
        <div className="heading">OWASP ✖ HACKTOBERFEST</div>
        </>
    )
}
export default Landing;