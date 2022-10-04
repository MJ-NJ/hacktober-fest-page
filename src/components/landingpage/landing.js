import React from "react";
import './landing.css';
import './particles.css'
import 'animate.css'
function Landing() {
    return (
        <>
            <div class="animation-wrapper">
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
            </div>
            <div style={{ "marginBottom": "40px" }}>
                <img className = "animate__animated animate__fadeInUp" src={require("./logo.png")} style={{ "maxHeight": "500px", "maxWidth": "500px" }}></img>
                <div className="heading animate__animated animate__fadeInUp"> ✖ </div>
                <div className="box1 animate__animated animate__fadeInUp">
                    <img src={require("../footer/owasp.png")} className="landing-logo" style={{ "maxHeight": "500px", "maxWidth": "500px","zIndex":"-100" }}></img>
                </div>
                <a target = {"_blank"} href="https://docs.google.com/forms/d/1Snr44jB3V8_VIs-smhBxpWLmukEqdFzYGjKv6FPATXo" className='btn-special animate__animated animate__fadeInUp' style={{ "textDecoration": "none","zIndex":"1000" }}>
                    REGISTER FOR ORIENTATION</a>
            </div>
        </>

    )
}
export default Landing;